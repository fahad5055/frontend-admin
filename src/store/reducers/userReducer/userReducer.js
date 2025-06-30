import { LOGIN_SUCCESS, LOGOUT, UPDATE_USER } from "../../action/userActions";

const initialState = {
  token: null,
  user: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
