import { apiRequest } from "./Api";

export const loginApi = async (credentials) => {
  console.log(credentials);

  if (!credentials.email || !credentials.password) {
    throw new Error("Please provide both Email and Password");
  }
  return apiRequest("post", "/api/users/login", credentials);
};

export const logOutApi = async (credentials) => {
  const data = {
    loginToken: credentials.loginToken,
    tokenExpiration: credentials.tokenExpiration,
  };
  if (!credentials.loginToken || !credentials.tokenExpiration) {
    throw new Error("Please provide Information");
  }
  return apiRequest(`patch", "/api/users/${credentials.id}`, data);
};
