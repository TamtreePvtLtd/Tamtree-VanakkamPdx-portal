import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstanceWithOutCredential = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

const httpWithoutCredentials = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.get<T>(url, config),
  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.post<T>(url, data, config),
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.delete<T>(url, config),
  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.put<T>(url, data, config),
};

export { httpWithoutCredentials };
