import axios from 'axios';
import pako from 'pako';

// Function to decode a Base64 string
const base64ToUint8Array = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

// Function to check if a string is Base64-encoded
const isBase64 = (str) => {
  try {
    return btoa(atob(str)) === str;
  } catch {
    return false;
  }
};

// Set the base URL for the Axios instance
const baseURL = 'http://localhost:9000/api';

// Create an Axios instance with a base URL and a timeout
const axiosInstance = axios.create({ baseURL, timeout: 10000 });

// Define fields to exclude from decompression
const excludeFromDecompression = new Set(['_id']);

// Add a response interceptor to decompress the response
axiosInstance.interceptors.response.use(
  (response) => {
    Object.entries(response.data)
      .filter(([key, value]) => typeof value === 'string' && isBase64(value) && !excludeFromDecompression.has(key))
      .forEach(([key, base64String]) => {
        try {
          const decompressedData = pako.inflate(base64ToUint8Array(base64String), { to: 'string' });
          response.data[key] = decompressedData;
        } catch (error) {
          throw new Error(`Error decompressing field ${key}: ${error.message}`);
        }
      });
    return response;
  },
  (error) => Promise.reject(new Error(`Axios response error: ${error.message}`))
);

// Function to send an API request using the configured Axios instance
export const sendRequest = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
    throw new Error(`Request failed: ${error.message}`);
  }
};
