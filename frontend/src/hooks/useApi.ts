import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/'
});

export const useApi = () => ({
  getProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  }
});
