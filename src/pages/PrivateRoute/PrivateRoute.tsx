import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router';
import Login from '../Login/Login';
import { useTypedSelector } from '../../store/useTypesSelector';
import { useDispatch } from 'react-redux';
import { loginSuccessAction } from '../../store/authReducer';

import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { FunctionComponentElement } from 'react';

import styles from './PrivateRoute.module.scss';


const PrivateRoute: React.FunctionComponent<ParamTypes> = ({ children, path, ...rest }) => {

  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(false);



  useEffect(() => {
    let data = localStorage.getItem('userInfo')

    const token = localStorage.getItem('jwt');
    if (data) {
      data = JSON.parse(data);
    }
    console.log(data);
    if (token) {
      dispatch(loginSuccessAction(data));
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
  children?: any;
  path?: string,
  exact?: boolean,
  component?: any
}