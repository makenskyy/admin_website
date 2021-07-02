import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router';
import Login from '../Login/Login';

export default function PrivateRoute({ children, ...rest }) {
  const isAuth = useSelector(state => state.authReducer.isLoggedIn);

  return (
    <Route {...rest} render={() => {
      return isAuth ? children :
        <Redirect to='/login' />
    }} />

  )
}
