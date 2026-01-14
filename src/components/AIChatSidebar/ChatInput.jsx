import React, { useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ChatInput = ({ value, onChange, onSend, disabled, placeholder }) => {
  const textareaRef = useRef(null);

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
      if (!disabled && value.trim()) {
        onSend();
      }
    }
  };

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || 'Ask me to add a section...'}
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
          disabled={disabled || !value.trim()}
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
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
};

export default ChatInput;
