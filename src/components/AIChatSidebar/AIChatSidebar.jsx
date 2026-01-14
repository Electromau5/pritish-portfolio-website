import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Loader2, Trash2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SectionPreviewCard from './SectionPreviewCard';
import { generateSectionFromChat } from '../../services/claudeService';
import { parseDocument } from '../../services/fileParser';
import { calculateInsertionIndex, getInsertionDescription, findSectionIndex } from '../../utils/sectionMatcher';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: `Hi! I can help you manage sections in this case study. You can:

- "Add a Project Overview at the beginning"
- "Delete the Problem Statement section"
- Attach a PDF/DOCX and ask me to create sections from it`
};

// Delete confirmation card component
const DeleteConfirmCard = ({ sectionTitle, onConfirm, onCancel }) => (
  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
        <Trash2 size={16} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-red-600 font-medium uppercase tracking-wide">
          Delete Section
        </p>
        <h4 className="font-medium text-gray-900">{sectionTitle}</h4>
      </div>
    </div>
    <p className="text-sm text-gray-600 mb-4">
      Are you sure you want to delete this section? This action cannot be undone.
    </p>
    <div className="flex gap-2">
      <button
        onClick={onConfirm}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
      >
        <Trash2 size={16} />
        Delete
      </button>
      <button
        onClick={onCancel}
        className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
    </div>
  </div>
);

const AIChatSidebar = ({
  isOpen,
  onClose,
  caseStudy,
  sections,
  onInsertSection,
  onDeleteSection,
  template
}) => {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [attachedFile, setAttachedFile] = useState(null);
  const [parsedFileContent, setParsedFileContent] = useState(null);
  const [isParsingFile, setIsParsingFile] = useState(false);
  const messagesEndRef = useRef(null);
  const sidebarRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, pendingSection, pendingDelete]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        // Check if click was on the toggle button
        if (e.target.closest('[data-chat-toggle]')) return;
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Handle file attachment
  const handleFileAttach = async (file) => {
    setAttachedFile(file);
    setIsParsingFile(true);
    setParsedFileContent(null);

    try {
      const result = await parseDocument(file);
      if (result.success) {
        setParsedFileContent(result.text);
        setMessages(prev => [...prev, {
          role: 'system',
          content: `Attached: ${file.name} (${Math.round(result.text.length / 1000)}k characters). You can now ask me to create sections from this document.`
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Sorry, I couldn't parse that file: ${result.error}`
        }]);
        setAttachedFile(null);
      }
    } catch (error) {
      console.error('Error parsing file:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I couldn't parse that file. Please try a different PDF or DOCX.`
      }]);
      setAttachedFile(null);
    } finally {
      setIsParsingFile(false);
    }
  };

  // Handle file removal
  const handleFileRemove = () => {
    setAttachedFile(null);
    setParsedFileContent(null);
  };

  const handleSend = async () => {
    if ((!inputValue.trim() && !parsedFileContent) || isGenerating) return;

    const userMessage = inputValue.trim() || 'Create sections from the attached document';
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsGenerating(true);

    try {
      const result = await generateSectionFromChat(
        userMessage,
        {
          title: caseStudy?.title || 'Untitled',
          subtitle: caseStudy?.subtitle || '',
          template: template,
          sections: sections
        },
        messages.filter(m => m.role !== 'system'),
        parsedFileContent // Pass the parsed document content
      );

      if (result.action === 'add_section' && result.generatedSection) {
        setPendingSection({
          section: result.generatedSection,
          insertionPoint: result.insertionPoint,
          sectionType: result.sectionType
        });
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: result.message || `I've generated a ${result.sectionType} section for you. Would you like to add it?`
        }]);
      } else if (result.action === 'delete_section' && result.sectionTitle) {
        // Find the section index to verify it exists
        const sectionIndex = findSectionIndex(sections, result.sectionTitle);
        if (sectionIndex !== -1) {
          setPendingDelete({
            sectionTitle: sections[sectionIndex].title,
            sectionIndex: sectionIndex
          });
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: result.message || `I'll delete the "${sections[sectionIndex].title}" section.`
          }]);
        } else {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: `I couldn't find a section called "${result.sectionTitle}". The available sections are: ${sections.map(s => s.title).join(', ')}`
          }]);
        }
      } else if (result.action === 'clarify') {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: result.message
        }]);
      } else if (result.action === 'error') {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: result.message || 'Sorry, something went wrong. Please try again.'
        }]);
      } else {
        // Handle unexpected response format
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: result.message || 'I processed your request. Is there anything else you\'d like me to help with?'
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${error.message}. Please try again.`
      }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAcceptSection = () => {
    if (pendingSection && onInsertSection) {
      const insertIndex = calculateInsertionIndex(sections, pendingSection.insertionPoint);
      const positionDesc = getInsertionDescription(sections, insertIndex);

      onInsertSection(pendingSection.section, insertIndex);

      setMessages(prev => [...prev, {
        role: 'system',
        content: `Added "${pendingSection.section.title}" ${positionDesc}.`
      }]);
      setPendingSection(null);
    }
  };

  const handleRejectSection = () => {
    setPendingSection(null);
    setMessages(prev => [...prev, {
      role: 'system',
      content: 'Section discarded. What else would you like to do?'
    }]);
  };

  const handleConfirmDelete = () => {
    if (pendingDelete && onDeleteSection) {
      onDeleteSection(pendingDelete.sectionIndex);
      setMessages(prev => [...prev, {
        role: 'system',
        content: `Deleted "${pendingDelete.sectionTitle}" section.`
      }]);
      setPendingDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setPendingDelete(null);
    setMessages(prev => [...prev, {
      role: 'system',
      content: 'Delete cancelled. What else would you like to do?'
    }]);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 right-0 h-full w-full sm:w-96 bg-white
          shadow-2xl z-50 flex flex-col
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Assistant</h3>
              <p className="text-xs text-gray-500">Add or delete sections</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg} />
          ))}

          {/* Pending Section Preview */}
          {pendingSection && (
            <SectionPreviewCard
              section={pendingSection.section}
              sectionType={pendingSection.sectionType}
              onAccept={handleAcceptSection}
              onReject={handleRejectSection}
            />
          )}

          {/* Pending Delete Confirmation */}
          {pendingDelete && (
            <DeleteConfirmCard
              sectionTitle={pendingDelete.sectionTitle}
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )}

          {/* Typing indicator */}
          {isGenerating && (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Loader2 size={16} className="animate-spin" />
              <span>Generating...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          disabled={isGenerating}
          placeholder="Ask me to add or delete a section..."
          attachedFile={attachedFile}
          onFileAttach={handleFileAttach}
          onFileRemove={handleFileRemove}
          isParsingFile={isParsingFile}
        />
      </div>
    </>
  );
};

export default AIChatSidebar;
