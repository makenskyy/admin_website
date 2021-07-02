import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));