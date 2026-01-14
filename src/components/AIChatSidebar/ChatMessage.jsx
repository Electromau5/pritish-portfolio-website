import React from 'react';
import { User, Bot, Info } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const { role, content } = message;

  const isUser = role === 'user';
  const isSystem = role === 'system';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div
        className={`
          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${isUser ? 'bg-black text-white' : isSystem ? 'bg-gray-200 text-gray-600' : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'}
        `}
      >
        {isUser ? (
          <User size={16} />
        ) : isSystem ? (
          <Info size={16} />
        ) : (
          <Bot size={16} />
        )}
      </div>

      {/* Message bubble */}
      <div
        className={`
          max-w-[80%] rounded-2xl px-4 py-2.5 text-sm
          ${isUser
            ? 'bg-black text-white rounded-br-md'
            : isSystem
              ? 'bg-gray-100 text-gray-600 italic rounded-bl-md'
              : 'bg-gray-100 text-gray-900 rounded-bl-md'
          }
        `}
      >
        <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
