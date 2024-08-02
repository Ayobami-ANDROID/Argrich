import axios from "axios";


let store

export const injectStore = _store => {
  store = _store
}
const apiClient = axios.create({
  baseURL: "https://agrich.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Set the Authorization header from the Redux state
apiClient.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token.access}`;
  }
  return config;
});
export default apiClient;
