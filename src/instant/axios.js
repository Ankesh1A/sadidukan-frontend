import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sadidukan-backend.onrender.com', // Backend URL
  withCredentials: true, // Cookies ko bhejne ke liye
});

export default axiosInstance;
