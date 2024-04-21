import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bus-booking-ruby.vercel.app/api',
  withCredentials: true,
});

export default api;
