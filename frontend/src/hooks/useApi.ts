import axios from 'axios';
import { ContactData } from '../types/ContactData';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const useApi = () => ({
  getProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },
  sendMessage: async (contactData: ContactData) => {
    const response = await api.post('contact-me', { ...contactData });

    return response.status;
  }
});
