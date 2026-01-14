import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Loader2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SectionPreviewCard from './SectionPreviewCard';
import { generateSectionFromChat } from '../../services/claudeService';
import { calculateInsertionIndex, getInsertionDescription } from '../../utils/sectionMatcher';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: `Hi! I can help you add sections to this case study. Try saying things like:

- "Add a Project Overview at the beginning"
- "Insert team information after the Research section"
- "Add success metrics above the Conclusion"
- "Create a user research section at the end"`
};

const AIChatSidebar = ({
  isOpen,
  onClose,
  caseStudy,
  sections,
  onInsertSection,
  template
}) => {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);
  const messagesEndRef = useRef(null);
  const sidebarRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, pendingSection]);

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

  const handleSend = async () => {
    if (!inputValue.trim() || isGenerating) return;

    const userMessage = inputValue.trim();
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
        messages.filter(m => m.role !== 'system')
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
      content: 'Section discarded. What else would you like to add?'
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
              <p className="text-xs text-gray-500">Add sections with AI</p>
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
          placeholder="Ask me to add a section..."
        />
      </div>
    </>
  );
};

export default AIChatSidebar;
