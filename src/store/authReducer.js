import { customers } from '../data/data';
import { products } from '../data/data';

console.log(customers);

const defaultState = {
  isLoggedIn: false,
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
      return { authInfo: action.payload, isLoggedIn: true, customers: customers, products: products };
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