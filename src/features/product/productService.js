import apiClient from "../../app/axiosConfig";

const getProducts = async () => {
  const response = await apiClient.get(`products/`);
  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await apiClient.get(`products/${id}/`);
  return response.data;
};

const productService = {
  getProducts,
  getSingleProduct,
};
export default productService;
