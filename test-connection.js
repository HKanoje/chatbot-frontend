// test-connection.js
const API_BASE_URL = 'http://localhost:8000';

async function testConnection() {
  try {
    console.log('Testing connection to:', API_BASE_URL);
    
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    
    console.log('✅ Backend is reachable!');
    console.log('Response:', data);
  } catch (error) {
    console.error('❌ Cannot reach backend:', error.message);
  }
}

testConnection();