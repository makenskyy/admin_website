import { customers } from '../data/data';
import { products } from '../data/data';
import { orders } from '../data/data';

const defaultState = {
  isLoggedIn: false,
  authInfo: {
    username: "",
  },
  customers: [],
  products: [],
  orders: [],
}

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const PRODUCT_CREATE = "PRODUCT_CREATE";
const PRODUCT_DELETE = "PRODUCT_DELETE";
const PRODUCT_UPDATE = "PRODUCT_UPDATE";
const ORDER_DELETE = "ORDER_DELETE";
const CUSTOMER_DELETE = "CUSTOMER_DELETE";
const CUSTOMER_UPDATE = "CUSTOMER_UPDATE";


export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { authInfo: action.payload, isLoggedIn: true, customers: customers, products: products, orders: orders };
    case LOGOUT_USER:
      return { isLoggedIn: false, authInfo: { username: "" }, customers: [], products: [] };
    case PRODUCT_CREATE:
      return { ...state, products: [...state.products, action.payload] }
    case PRODUCT_DELETE:
      const sortedProducts = state.products.filter(item => item.id !== action.payload);
      return { ...state, products: sortedProducts }
    case PRODUCT_UPDATE:
      const updatedProducts = state.products.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      })
      return { ...state, products: updatedProducts }
    case ORDER_DELETE:

      return { ...state, customers: action.payload.updatedCustomers, orders: action.payload.sortedOrders };
    case CUSTOMER_DELETE:
      return { ...state, customers: action.payload.updatedCustomers, orders: action.payload.updatedOrders };
    case CUSTOMER_UPDATE:
      const newUpdatedCustomers = state.customers.map(customer => {
        if (customer.id === action.payload.id) {
          return action.payload;
        } else return customer;
      })
      return { ...state, customers: newUpdatedCustomers };
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

export const createProductAction = (payload) => {
  return { type: PRODUCT_CREATE, payload };
}

export const deleteProductAction = (payload) => {
  return { type: PRODUCT_DELETE, payload };
}


export const updateProductAction = (payload) => {
  return { type: PRODUCT_UPDATE, payload };
}

export const orderDeleteAction = (payload) => {
  return { type: ORDER_DELETE, payload }
};

export const deleteCustomerAction = (payload) => {
  return { type: CUSTOMER_DELETE, payload };
}

export const updateCustomerAction = (payload) => {
  return { type: CUSTOMER_UPDATE, payload };
}