import axios from 'axios';
import { API_KEY_CLIENT, API_URL } from '@/configs/config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY_CLIENT,
  },
});

export default api;
