import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

const SectionEditModal = ({ isOpen, section, onSave, onClose }) => {
  const [editedSection, setEditedSection] = useState(null);

  useEffect(() => {
    if (section) {
      setEditedSection(JSON.parse(JSON.stringify(section))); // Deep clone
    }
  }, [section]);

  if (!isOpen || !editedSection) return null;

  const handleContentChange = (contentIndex, field, value) => {
    setEditedSection(prev => {
      const updated = { ...prev };
      updated.content = [...prev.content];
      updated.content[contentIndex] = {
        ...updated.content[contentIndex],
        data: {
          ...updated.content[contentIndex].data,
          [field]: value
        }
      };
      return updated;
    });
  };

  const handleParagraphChange = (contentIndex, paragraphIndex, value) => {
    setEditedSection(prev => {
      const updated = { ...prev };
      updated.content = [...prev.content];
      const paragraphs = [...(updated.content[contentIndex].data.paragraphs || [])];
      paragraphs[paragraphIndex] = value;
      updated.content[contentIndex] = {
        ...updated.content[contentIndex],
        data: {
          ...updated.content[contentIndex].data,
          paragraphs
        }
      };
      return updated;
    });
  };

  const handleSave = () => {
    onSave(editedSection);
    onClose();
  };

  const renderContentEditor = (content, contentIndex) => {
    const { type, data } = content;

    switch (type) {
      case 'projectOverview':
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={data.title || ''}
                onChange={(e) => handleContentChange(contentIndex, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Paragraphs</label>
              {(data.paragraphs || []).map((para, idx) => (
                <textarea
                  key={idx}
                  value={para}
                  onChange={(e) => handleParagraphChange(contentIndex, idx, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                  rows={3}
                />
              ))}
            </div>
          </div>
        );

      case 'problemSolution':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Problem Title</label>
              <input
                type="text"
                value={data.problemTitle || ''}
                onChange={(e) => handleContentChange(contentIndex, 'problemTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Problem Description</label>
              {(data.problemDescription || []).map((para, idx) => (
                <textarea
                  key={idx}
                  value={para}
                  onChange={(e) => {
                    const newDesc = [...(data.problemDescription || [])];
                    newDesc[idx] = e.target.value;
                    handleContentChange(contentIndex, 'problemDescription', newDesc);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                  rows={3}
                />
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Solution Title</label>
              <input
                type="text"
                value={data.solutionTitle || ''}
                onChange={(e) => handleContentChange(contentIndex, 'solutionTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Solution Description</label>
              {(data.solutionDescription || []).map((para, idx) => (
                <textarea
                  key={idx}
                  value={para}
                  onChange={(e) => {
                    const newDesc = [...(data.solutionDescription || [])];
                    newDesc[idx] = e.target.value;
                    handleContentChange(contentIndex, 'solutionDescription', newDesc);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                  rows={3}
                />
              ))}
            </div>
          </div>
        );

      case 'stats':
      case 'successMetrics':
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Metrics</label>
            {(data.items || []).map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={item.value || ''}
                  onChange={(e) => {
                    const newItems = [...(data.items || [])];
                    newItems[idx] = { ...newItems[idx], value: e.target.value };
                    handleContentChange(contentIndex, 'items', newItems);
                  }}
                  placeholder="Value (e.g., 85%)"
                  className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  value={item.label || ''}
                  onChange={(e) => {
                    const newItems = [...(data.items || [])];
                    newItems[idx] = { ...newItems[idx], label: e.target.value };
                    handleContentChange(contentIndex, 'items', newItems);
                  }}
                  placeholder="Label"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            ))}
          </div>
        );

      case 'hero':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={data.title || ''}
                onChange={(e) => handleContentChange(contentIndex, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={data.description || ''}
                onChange={(e) => handleContentChange(contentIndex, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="text-gray-500 text-sm">
            Editing for this content type ({type}) is not yet supported.
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Edit Section</h2>
            <p className="text-sm text-gray-500">{editedSection.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
          {/* Section Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input
              type="text"
              value={editedSection.title}
              onChange={(e) => setEditedSection(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Content blocks */}
          {editedSection.content?.map((content, idx) => (
            <div key={idx} className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                {content.type} Block
              </div>
              {renderContentEditor(content, idx)}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionEditModal;
