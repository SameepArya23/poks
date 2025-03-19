import axios, { AxiosError, AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
  //   baseURL: import.meta.env.VITE_SERVER_URL,
  baseURL: "https://api.freeapi.app",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status == 401) {
    }
    return Promise.reject(error);
  }
);

export default instance;
