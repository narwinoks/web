import { api } from '@/common/libs/useApi';

export const getALLTimeSinceToday = async () => {
  const response = await api.get('/api/categories');
  return response.data;
};
