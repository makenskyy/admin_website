import { customers } from '../data/data';
import { products } from '../data/data';
import { orders } from '../data/data';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

interface typeState {
  isToggledMenuButton: boolean,
  isLoggedIn: boolean,
  authInfo: {
    phone_number: string,
    first_name: string,
    last_name: string
    username: string,
    email: string
  },
  customers: any[],
  products: any[],
  orders: any[],
  error: string
}



interface actionState {
  type: string,
  payload?: any;
}

const defaultState: typeState = {
  isToggledMenuButton: true,
  isLoggedIn: false,
  authInfo: {
    username: "",
    email: "",
    phone_number: "",
    first_name: "",
    last_name: "",
  },
  customers: [],
  products: [],
  orders: [],
  error: ""
}

const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
const LOGOUT_USER = "LOGOUT_USER";

export const USER_LOGIN_SAGA = "USER_LOGIN_SAGA";

const PRODUCT_CREATE = "PRODUCT_CREATE";
const PRODUCT_DELETE = "PRODUCT_DELETE";
const PRODUCT_UPDATE = "PRODUCT_UPDATE";
const ORDER_DELETE = "ORDER_DELETE";
const CUSTOMER_DELETE = "CUSTOMER_DELETE";
const CUSTOMER_UPDATE = "CUSTOMER_UPDATE";
const TOGGLE_MENU_BUTTON = "TOGGLE_MENU_BUTTON";

export const authReducer = (state = defaultState, action: actionState): typeState => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      console.log(action.payload);
      return { authInfo: action.payload, isLoggedIn: true, customers: customers, products: products, orders: orders, isToggledMenuButton: true, error: "" };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload };
    case LOGOUT_USER:
      return { isLoggedIn: false, authInfo: { username: "", email: "", phone_number: "", first_name: "", last_name: "" }, customers: [], products: [], orders: [], isToggledMenuButton: true, error: "" };
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
    case TOGGLE_MENU_BUTTON:
      return { ...state, isToggledMenuButton: action.payload };
    default:
      return state;
  }
}


export const loginAction = (payload: any) => ({ type: USER_LOGIN_SAGA, payload });

export const loginSuccessAction = (payload: any) => ({ type: LOGIN_USER_SUCCESS, payload })

export const loginFailAction = (payload: any) => {
  return { type: LOGIN_USER_FAIL, payload };
}

export const logoutAction = () => {
  return { type: LOGOUT_USER };
}

export const createProductAction = (payload: any) => {
  return { type: PRODUCT_CREATE, payload };
}

export const deleteProductAction = (payload: any) => {
  return { type: PRODUCT_DELETE, payload };
}


export const updateProductAction = (payload: any) => {
  return { type: PRODUCT_UPDATE, payload };
}

export const orderDeleteAction = (payload: any) => {
  return { type: ORDER_DELETE, payload }
};

export const deleteCustomerAction = (payload: any) => {
  return { type: CUSTOMER_DELETE, payload };
}

export const updateCustomerAction = (payload: any) => {
  return { type: CUSTOMER_UPDATE, payload };
}

export const toggleMenuButtonAction = (payload: boolean) => {
  return { type: TOGGLE_MENU_BUTTON, payload };
}
