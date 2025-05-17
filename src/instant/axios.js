import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sadidukan-back.onrender.com', // ✅ Correct backend URL
  headers: {
    'Content-Type': 'application/json',            // ✅ Required for JSON payloads
  },
  withCredentials: true,                           // ✅ Required for sending cookies (important!)
});

export default axiosInstance;
