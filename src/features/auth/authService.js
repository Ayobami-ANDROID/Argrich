import apiClient from "../../app/axiosConfig";

const register = async (userData) => {
  const response = await apiClient.post("accounts/signup/", userData);
  return response.data;
};

const login = async (userData) => {
  const response = await apiClient.post("accounts/login", userData);
  return response.data;
};

const getUser = async (userId) => {
  const response = await apiClient.get(`users/${userId}`);

  return response.data;
};

const authService = {
  getUser,

  login,
  register,
};

export default authService;
