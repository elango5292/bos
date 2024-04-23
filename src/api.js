import axios from 'axios';

// http://localhost:3001  https://bus-booking-ruby.vercel.app
const api = axios.create({
  baseURL: 'https://bus-booking-ruby.vercel.app',
  withCredentials: true,
  responseType: 'json'
});

export default api;
