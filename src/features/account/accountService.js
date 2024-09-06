import apiClient from "../../app/axiosConfig";


const getProfile = async (userData) => {
  const response = await apiClient.get("accounts/edit/");
  return response.data;
};

const editProfile = async (userData) => {
  const response = await apiClient.put("accounts/edit/", userData);
  return response.data;
};

const accountService = {
  getProfile,
  editProfile,
};

export default accountService;
