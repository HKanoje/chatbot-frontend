// src/components/chat/LoadingIndicator.jsx
import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="flex gap-4 max-w-2xl">
        {/* AI Avatar */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
          AI
        </div>
        
        {/* Loading Animation */}
        <div className="bg-stone-100 border border-stone-200 px-6 py-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div 
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" 
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div 
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" 
              style={{ animationDelay: '0.4s' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;