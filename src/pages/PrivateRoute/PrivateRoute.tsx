import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router';
import Login from '../Login/Login';
import { useTypedSelector } from '../../store/useTypesSelector';


const PrivateRoute: React.FunctionComponent<ParamTypes> = ({ children, path, ...rest }) => {
  const isAuth = useTypedSelector(state => state.authReducer.isLoggedIn);

  return (
    <Route {...rest} render={() => {
      return isAuth ? children :
        <Redirect to='/login' />
    }} />

  )
}
export default PrivateRoute;

interface ParamTypes {
  children: any;
  path: string
}