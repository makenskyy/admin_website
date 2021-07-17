import React, { useState, useEffect } from 'react'
import styles from './login.module.scss'

import { useDispatch } from 'react-redux';

import { hideErrorMesssage, loginAction } from '../../store/authReducer';

import { useHistory, Redirect } from 'react-router';
import { useTypedSelector } from '../../store/useTypesSelector';

import axios from 'axios';


export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const errorMessage = useTypedSelector(state => state.authReducer.error);


  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    setTimeout(() => {
      dispatch(hideErrorMesssage())
    }, 5000)
  }, [errorMessage])



  const submit = (event /*: React.FormEvent*/) => {
    event.preventDefault();

    const payload = { identifier: username, password };
    dispatch(loginAction(payload));

  }
  const isLoggedIn = useTypedSelector(state => state.authReducer.isLoggedIn);
  { isLoggedIn && history.push('/dashboard') }



  return (

    <>
      <div className={styles.login}>
        <div className={styles.loginContainer}>
          <h1>Login</h1>
          <form className={styles.loginForm} onSubmit={submit}>
            <div
              className={`${styles.usernameField} + ${styles.inputField}`}>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
              <span></span>
              <label>Username</label>
            </div>

            <div
              className={`${styles.passwordField} + ${styles.inputField}`}>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <span></span>
              <label>Password</label>
            </div>
            {errorMessage &&
              <div className={styles.error}>
                <p>{errorMessage}</p>
              </div>
            }

            <div className={styles.buttonParent}>
              <button className={styles.loginButton} type="submit">Login</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
