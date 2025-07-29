import { apiRequest } from "./Api";

export const createProduct = async (data) => {
  return apiRequest("post", "/api/product", data);
};

export const UpdateProduct = async (credentials) => {
  const { id, ...data } = credentials;
  return apiRequest("patch", `/api/product/${id}`, data);
};

export const useGetProduct = () => {
  const getProduct = async () => {
    return apiRequest("get", "/api/product", null, null);
  };

  return getProduct;
};
export const deleteProduct = async (id) => {
  return apiRequest("delete", `/api/product/${id}`);
};
