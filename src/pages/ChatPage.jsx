// src/pages/ChatPage.jsx
import React from 'react';
import Header from '../components/chat/Header';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';
import LoadingIndicator from '../components/chat/LoadingIndicator';
import useChat from '../hooks/useChat';

const ChatPage = () => {
  const {
    messages,
    inputText,
    setInputText,
    isLoading,
    attachedFile,
    setAttachedFile,
    handleFileAttach,
    handleSendMessage,
    messagesEndRef
  } = useChat();

  return (
    <div className="flex flex-col h-screen bg-emerald-50">
      {/* Header */}
      <Header />

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Render all messages */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {/* Loading indicator */}
          {isLoading && <LoadingIndicator />}
          
          {/* Auto-scroll reference */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        attachedFile={attachedFile}
        setAttachedFile={setAttachedFile}
        onSendMessage={handleSendMessage}
        onFileAttach={handleFileAttach}
      />
    </div>
  );
};

export default ChatPage;