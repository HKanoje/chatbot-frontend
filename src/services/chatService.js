// src/services/chatService.js
import { API_BASE_URL } from '../utils /constants';

/**
 * Sends message to the RAG backend API
 * @param {string} message - User's message
 * @param {File} file - Attached file (optional)
 * @returns {Promise<string>} - Bot's response
 */
export const sendMessageToAPI = async (message, file) => {
  // MOCK RESPONSE - Replace this with your actual API call
  // This simulates network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock responses based on message length
  if (message.length > 50) {
    return "That's an interesting question! Based on the documents, I can provide you with detailed information about that topic.";
  } else {
    return "I understand. Let me help you with that!";
  }

  /* 
  ===== WHEN READY TO CONNECT YOUR BACKEND, USE THIS: =====
  
  try {
    const formData = new FormData();
    formData.append('message', message);
    if (file) {
      formData.append('file', file);
    }

    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      body: formData,
      // Add headers if needed (e.g., Authorization token)
      // headers: {
      //   'Authorization': `Bearer ${yourToken}`
      // }
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.response; // Adjust based on your API response structure
    
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
  */
};