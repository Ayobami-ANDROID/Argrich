import apiClient from "../../app/axiosConfig";

const getProducts = async (limit,offset) => {
  const response = await apiClient.get(`products?limit=${limit}&offset=${offset}`);
  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await apiClient.get(`products/${id}/`);
  return response.data;
};

const getSearchProduct = async (name,category,limit,offset) => {
  const response = await apiClient.get(`products?name=${name}&category=${category}&limit=${limit}&offset=${offset}`)
  return response.data
}

const createProductOrder = async (userData) => {
  const response = await apiClient.post(`/products/orders/`,userData)
  return response.data
}

const getProductOrder = async () => {
  const response = await apiClient.get(`/products/orders/`)
  return response.data
}

const getProductOrderById = async (id) => {
  const response = await apiClient.get(`/products/orders/{id}`)
  return response.data
}

const productService = {
  getProducts,
  getSingleProduct,
  getSearchProduct,
  createProductOrder,
  getProductOrder,
  getProductOrderById
};
export default productService;
