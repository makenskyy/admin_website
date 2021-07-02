import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/index';

export default function Main() {
  return (
    <Provider store={store}>
      <Route component={ } />
    </Provider>
  )
}


/*

      <Provider store = {store}>

        <Route exact path = '/login' component = {Login} />

        <Route component = {App} isLoggedIn: {store.getState().authReducer.isLoggedIn} />

      </Provider>












*/