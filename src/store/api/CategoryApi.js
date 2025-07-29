import { apiRequest } from "./Api";

export const CreateCategory = async (data) => {
  return apiRequest("post", "/api/category", data);
};

export const UpdateCategory = async (credentials) => {
  const { id, ...data } = credentials;
  return apiRequest("patch", `/api/category/${id}`, data);
};

export const useGetCategory = () => {
  const getCategory = async () => {
    return apiRequest("get", "/api/category", null, null);
  };

  return getCategory;
};
