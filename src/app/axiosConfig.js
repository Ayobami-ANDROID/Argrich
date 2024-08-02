import axios from "axios";
import store from './store';
const apiClient = axios.create({
  baseURL: "https://agrich.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Set the Authorization header from the Redux state
apiClient.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default apiClient;
