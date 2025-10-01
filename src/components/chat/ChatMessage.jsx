// src/components/chat/ChatMessage.jsx
import React from 'react';
import { Paperclip } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const { text, sender, file } = message;
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-4 max-w-2xl ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div 
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
            isUser 
              ? 'bg-emerald-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {isUser ? 'U' : 'AI'}
        </div>
        
        {/* Message Content */}
        <div className="flex flex-col gap-2">
          <div 
            className={`px-6 py-4 rounded-2xl ${
              isUser
                ? 'bg-amber-50 border border-amber-200'
                : 'bg-stone-100 border border-stone-200'
            }`}
          >
            {/* File attachment indicator */}
            {file && (
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                <Paperclip size={14} className="text-gray-500" />
                <span className="text-xs text-gray-600 font-medium">{file}</span>
              </div>
            )}
            
            {/* Message text */}
            <p className="text-gray-800 leading-relaxed font-light">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;