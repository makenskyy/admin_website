const defaultState = {
  isLoggedIn: true,
  authInfo: {
    username: "",
  },
  customers: [],
  products: []
}

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";


export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, authInfo: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return { isLoggedIn: false, authInfo: { username: "" }, customers: [], products: [] }
    default:
      return state;
  }
}

export const loginAction = (payload) => {
  return { type: LOGIN_USER, payload };
}

export const logoutAction = () => {
  return { type: LOGOUT_USER };
}