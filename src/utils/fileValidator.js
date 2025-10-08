import { ALLOWED_FILE_EXTENSIONS } from "./constants";

/** 
  * Validate if the uploaded file type is allowed
  * @param {File} file - The file to validate
  * @returns {boolean} - True if the file type is allowed, false otherwise  
**/

export const ValidateFile = (file) => {
    if (!file) return false;
    return ALLOWED_FILE_EXTENSIONS.includes(file.type);
};

/**
 * Gets a user-friendly eror message for invalid files
 * @returns {string} - Error message
**/

export const getFileErrorMessage = () => {
    return "Please upload a PDF, Image, Excel, or Text file.";
}