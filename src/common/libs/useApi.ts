import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized, logging out...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const useApi = () => {
  const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.get<T>(url, config);
    return response.data;
  };
  const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.post<T>(url, data, config);
    return response.data;
  };
  const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.put<T>(url, data, config);
    return response.data;
  };

  const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.delete<T>(url, config);
    return response.data;
  };
  return { get, post, put, del };
};
