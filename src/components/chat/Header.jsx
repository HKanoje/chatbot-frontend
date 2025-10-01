// src/components/chat/Header.jsx
import React from 'react';

const Header = ({ title = "Orbot", subtitle = "Gen AI Chatbot" }) => {
  return (
    <div className="bg-white border-b border-gray-100 px-8 py-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 tracking-wide">
          {title}
        </h1>
        <p className="text-sm text-gray-500 mt-1 font-light">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;