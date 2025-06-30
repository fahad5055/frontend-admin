import axios from "axios";

// Base URL and Token Configuration
const BASE_URL = process.env.REACT_APP_API;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Generic Axios Function
export const apiRequest = async (method, endpoint, data, token) => {
  try {
    const response = await axiosInstance({
      method: method,
      url: endpoint,
      data: data,
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};
