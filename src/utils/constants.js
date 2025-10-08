// Allowed File Types

export const ALLOWED_FILE_TYPES = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/jpg',
    'applcation/vnd.ms-excel',
    'applcation/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv',
    'text/plain',
];

//File type extensions for input accept attribute
export const ALLOWED_FILE_EXTENSIONS = '.pdf, .jpeg, .png, .jpg, .xls, .xlsx, .csv, .txt';

//Threshould for showing laoding indicator
export const LOADING_THRESHOLD = 30; //in chars

// API endpoint - use environment variable
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';