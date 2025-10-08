// src/services/chatService.js
import { API_BASE_URL } from '../utils/constants';

/**
 * Sends message to the RAG backend API
 * @param {string} message - User's message
 * @param {File} file - Attached file (optional)
 * @param {string} conversationId - Conversation ID (optional)
 * @returns {Promise<Object>} - Bot's response with sources
 */
export const sendMessageToAPI = async (message, file = null, conversationId = null) => {
  try {
    // If there's a file, use the combined endpoint
    if (file) {
      return await sendMessageWithFile(message, file, conversationId);
    }
    
    // Otherwise, just send the message
    return await sendMessageOnly(message, conversationId);
    
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(error.message || 'Failed to get response from server');
  }
};

/**
 * Send message without file
 */
const sendMessageOnly = async (message, conversationId = null) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      conversation_id: conversationId
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return {
    response: data.response,
    conversationId: data.conversation_id,
    sources: data.sources || []
  };
};

/**
 * Send message with file attachment
 */
const sendMessageWithFile = async (message, file, conversationId = null) => {
  const formData = new FormData();
  formData.append('message', message);
  formData.append('file', file);
  
  if (conversationId) {
    formData.append('conversation_id', conversationId);
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/chat-with-file`, {
    method: 'POST',
    body: formData
    // Don't set Content-Type header - browser will set it with boundary
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return {
    response: data.response,
    conversationId: data.conversation_id,
    sources: data.sources || []
  };
};

/**
 * Upload document only (without message)
 * @param {File} file - File to upload
 * @returns {Promise<Object>} - Upload result
 */
export const uploadDocument = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/api/v1/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Upload Error:', error);
    throw new Error(error.message || 'Failed to upload document');
  }
};

/**
 * Get API health status
 * @returns {Promise<Object>} - Health status
 */
export const getHealthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    
    if (!response.ok) {
      throw new Error('API is not responding');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};

/**
 * Get vector store statistics
 * @returns {Promise<Object>} - Statistics
 */
export const getStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/stats`);
    
    if (!response.ok) {
      throw new Error('Failed to get statistics');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Stats error:', error);
    throw error;
  }
};