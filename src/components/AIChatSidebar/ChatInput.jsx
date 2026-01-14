import React, { useRef, useEffect } from 'react';
import { Send, Loader2, Paperclip, X, FileText } from 'lucide-react';

const ChatInput = ({
  value,
  onChange,
  onSend,
  disabled,
  placeholder,
  attachedFile,
  onFileAttach,
  onFileRemove,
  isParsingFile
}) => {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && (value.trim() || attachedFile)) {
        onSend();
      }
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && onFileAttach) {
      onFileAttach(file);
    }
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      {/* Attached file display */}
      {attachedFile && (
        <div className="mb-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
          <FileText size={18} className="text-gray-500" />
          <span className="text-sm text-gray-700 flex-1 truncate">
            {attachedFile.name}
          </span>
          {isParsingFile ? (
            <Loader2 size={16} className="text-gray-400 animate-spin" />
          ) : (
            <button
              onClick={onFileRemove}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
              title="Remove file"
            >
              <X size={16} className="text-gray-500" />
            </button>
          )}
        </div>
      )}

      <div className="flex items-end gap-2">
        {/* File attachment button */}
        <button
          onClick={handleAttachClick}
          disabled={disabled || isParsingFile}
          className="
            flex-shrink-0 w-10 h-10 rounded-full border border-gray-200
            flex items-center justify-center
            hover:bg-gray-50 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          title="Attach PDF or DOCX"
        >
          <Paperclip size={18} className="text-gray-500" />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.docx,.doc,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
          onChange={handleFileSelect}
          className="hidden"
        />

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={attachedFile ? 'Ask about the document or request sections...' : (placeholder || 'Ask me to add a section...')}
          disabled={disabled}
          rows={1}
          className="
            flex-1 resize-none rounded-xl border border-gray-200 px-4 py-3
            text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400
            disabled:bg-gray-50 disabled:text-gray-400
            max-h-[120px]
          "
        />
        <button
          onClick={onSend}
          disabled={disabled || (!value.trim() && !attachedFile)}
          className="
            flex-shrink-0 w-10 h-10 rounded-full bg-black text-white
            flex items-center justify-center
            hover:bg-gray-800 transition-colors
            disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
          "
        >
          {disabled ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">
        Attach a PDF/DOCX or type a request. Press Enter to send.
      </p>
    </div>
  );
};

export default ChatInput;
