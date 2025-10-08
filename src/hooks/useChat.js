// src/hooks/useChat.js
import { useState, useRef, useEffect } from 'react';
import { validateFile, getFileErrorMessage } from '../utils/fileValidator';
import { LOADING_THRESHOLD } from '../utils/constants';
import { sendMessageToAPI } from '../services/chatService';

const useChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle file attachment
  const handleFileAttach = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (validateFile(file)) {
        setAttachedFile(file);
        setError(null);
      } else {
        alert(getFileErrorMessage());
        setError(getFileErrorMessage());
      }
    }
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputText.trim() && !attachedFile) return;

    // Create user message
    const userMessage = {
      id: Date.now(),
      text: inputText || (attachedFile ? `[Uploaded: ${attachedFile.name}]` : ''),
      sender: 'user',
      file: attachedFile ? attachedFile.name : null
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    
    // Store message and file to send
    const messageToSend = inputText;
    const fileToSend = attachedFile;
    
    // Clear input and file
    setInputText('');
    setAttachedFile(null);
    setError(null);

    // Show loading for complex questions or file uploads
    if (messageToSend.length > LOADING_THRESHOLD || fileToSend) {
      setIsLoading(true);
    }

    try {
      // Call real API
      const response = await sendMessageToAPI(
        messageToSend, 
        fileToSend, 
        conversationId
      );
      
      // Store conversation ID for context
      if (response.conversationId) {
        setConversationId(response.conversationId);
      }
      
      setIsLoading(false);

      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        text: response.response,
        sender: 'bot',
        sources: response.sources
      };
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      setIsLoading(false);
      
      // Show error message
      const errorMessage = {
        id: Date.now() + 1,
        text: `Sorry, I encountered an error: ${error.message}. Please try again.`,
        sender: 'bot',
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
      setError(error.message);
      console.error('Error sending message:', error);
    }
  };

  return {
    messages,
    inputText,
    setInputText,
    isLoading,
    attachedFile,
    setAttachedFile,
    handleFileAttach,
    handleSendMessage,
    messagesEndRef,
    conversationId,
    error
  };
};

export default useChat;