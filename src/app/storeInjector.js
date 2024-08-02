import axios from "axios";
import { getStore } from "./storeInjector";

const createApiClient = () => {
  const apiClient = axios.create({
    baseURL: "https://api.example.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiClient.interceptors.request.use((config) => {
    const store = getStore();
    const token = store?.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return apiClient;
};

const apiClient = createApiClient();
export default apiClient;
