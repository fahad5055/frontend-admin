import { apiRequest } from "./Api";

export const CreateCategory = async (credentials) => {
  return apiRequest("post", "/api/category", credentials);
};

// export const UpdateCategory = async (credentials) => {
//   return apiRequest(`patch", /api/category/${credentials.id}`, credentials);
// };

export const useGetCategory = () => {
  // const token = useAuthToken();

  const getCategory = async () => {
    // if (!token) {
    //   throw new Error("Token is missing");
    // }

    return apiRequest("get", "/api/category", null, null);
  };

  return getCategory;
};
