import axios, { AxiosError, AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
  //   baseURL: import.meta.env.VITE_SERVER_URL,
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const access = localStorage.getItem("ACCESS");
export const user = JSON.parse(localStorage.getItem("USER") ?? "{}");

instance.interceptors.request.use(
  (config) => {
    if (access) {
      //   config.headers["Authorization"] = `Bearer ${
      //     useAuthStore.getState().newToken ?? access
      //   }`;
    }
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
