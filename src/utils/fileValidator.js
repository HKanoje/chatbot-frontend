// src/utils/fileValidator.js
import { ALLOWED_FILE_TYPES } from './constants';

/**
 * Validates if the uploaded file is allowed
 * @param {File} file - The file to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateFile = (file) => {
  if (!file) return false;
  return ALLOWED_FILE_TYPES.includes(file.type);
};

/**
 * Gets a user-friendly error message for invalid files
 * @returns {string} - Error message
 */
export const getFileErrorMessage = () => {
  return 'Please upload a PDF, Image, Excel, or Text file';
};