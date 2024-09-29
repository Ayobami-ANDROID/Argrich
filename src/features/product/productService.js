import apiClient from "../../app/axiosConfig";

const getProducts = async (limit,offset) => {
  const response = await apiClient.get(`products?limit=${limit}&offset=${offset}`);
  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await apiClient.get(`products/${id}/`);
  return response.data;
};

const getSearchProduct = async (name,category) => {
  const response = await apiClient.get(`products?name=${name}&category=${category}`)
  return response.data
}

const createProductOrder = async (userData) => {
  const response = await apiClient.post(`/products/orders/`,userData)
  return response.data
}

const productService = {
  getProducts,
  getSingleProduct,
  getSearchProduct,
  createProductOrder
};
export default productService;
