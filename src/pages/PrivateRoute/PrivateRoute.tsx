import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router';
import Login from '../Login/Login';
import { useTypedSelector } from '../../store/useTypesSelector';
import { useDispatch } from 'react-redux';
import { loginSuccessAction } from '../../store/authReducer';


const PrivateRoute: React.FunctionComponent<ParamTypes> = ({ children, path, ...rest }) => {

  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
    const data = localStorage.getItem('userInfo');
    if (data) {
      dispatch(loginSuccessAction('helloo'));
      setIsAuth(true);
    }
  }, [])




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