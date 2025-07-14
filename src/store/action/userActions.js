export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const UPDATE_USER = "UPDATE_USER";

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateClient = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});
