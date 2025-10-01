// src/components/chat/ChatInput.jsx
import React, { useRef } from 'react';
import { Send, Paperclip, X } from 'lucide-react';
import { ALLOWED_FILE_EXTENSIONS } from '../../utils /constants';

const ChatInput = ({ 
  inputText, 
  setInputText, 
  attachedFile, 
  setAttachedFile, 
  onSendMessage, 
  onFileAttach 
}) => {
  const fileInputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="bg-white border-t border-gray-100 px-8 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Attached file preview */}
        {attachedFile && (
          <div className="mb-4 flex items-center gap-3 text-sm bg-amber-50 border border-amber-300 px-4 py-3 transition-all">
            <Paperclip size={16} className="text-emerald-600" />
            <span className="text-gray-700 font-light flex-1">{attachedFile.name}</span>
            <button
              onClick={() => setAttachedFile(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        )}
        
  <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-2 border border-gray-200 focus-within:border-emerald-400 transition-all">
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={onFileAttach}
            accept={ALLOWED_FILE_EXTENSIONS}
            className="hidden"
          />
          
          {/* Attachment Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-emerald-100 transition-all duration-200 rounded-full"
            title="Attach file"
            tabIndex={-1}
          >
            <Paperclip size={20} />
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-gray-800 font-light placeholder-gray-400"
          />

          {/* Send Button */}
          <button
            onClick={onSendMessage}
            disabled={!inputText.trim() && !attachedFile}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-emerald-500 text-white hover:bg-emerald-600 disabled:bg-gray-200 disabled:cursor-not-allowed transition-all duration-200 rounded-full ml-1"
            title="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;