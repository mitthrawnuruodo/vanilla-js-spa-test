import axios from 'axios';

const API_URL = 'https://api.nasa.gov/planetary/apod';
//const API_KEY = process.env.NASA_API_KEY; // Access the API Key from environment variables
const API_KEY = import.meta.env.VITE_NASA_API_KEY; // Updated line

export async function getData() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
