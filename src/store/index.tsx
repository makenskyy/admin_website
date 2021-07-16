import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './authReducer';
import { rootWatcher } from "../saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();


export const rootReducer = combineReducers({
  authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootWatcher)