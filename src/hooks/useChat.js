// src/hooks/useChat.js
import { useState, useRef, useEffect } from 'react';
import { ValidateFile, getFileErrorMessage } from '../utils /fileValidator';
import { LOADING_THRESHOLD } from '../utils /constants';
import { sendMessageToAPI } from '../services/chatService';

const useChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
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
      } else {
        alert(getFileErrorMessage());
      }
    }
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputText.trim() && !attachedFile) return;

    // Create user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      file: attachedFile ? attachedFile.name : null
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    
    // Store message to send and clear input
    const messageToSend = inputText;
    const fileToSend = attachedFile;
    setInputText('');
    setAttachedFile(null);

    // Show loading for complex questions
    if (messageToSend.length > LOADING_THRESHOLD) {
      setIsLoading(true);
    }

    try {
      // Call API (currently returns mock response)
      const botResponseText = await sendMessageToAPI(messageToSend, fileToSend);
      
      setIsLoading(false);

      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setIsLoading(false);
      
      // Error handling
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
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
    messagesEndRef
  };
};

export default useChat;