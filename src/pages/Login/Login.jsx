import React, { useState } from 'react'
import styles from './login.module.scss'

import { useDispatch } from 'react-redux';

import { loginAction } from '../../store/authReducer';

import { useHistory, Redirect } from 'react-router';
import { useTypedSelector } from '../../store/useTypesSelector';

import axios from 'axios';


export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();


  const submit = (event /*: React.FormEvent*/) => {
    event.preventDefault();

    const payload = { identifier: username, password };
    dispatch(loginAction(payload));



    // const data = {
    //   identifier: username,
    //   password: password
    // }
    // dispatch(loginAction(username, password))

    // axios.post("http://134.209.197.75/auth/local", data)
    //   .then(res => {
    //     localStorage.setItem('token', res.jwt);
    //     dispatch(loginAction({ username: username }));
    //     history.push('/dashboard');
    //   }).catch(err => {
    //     console.log(err)
    //   })
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
              className={styles.inputField}>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
              <span></span>
              <label>Username</label>
            </div>

            <div
              className={styles.inputField}>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <span></span>
              <label>Password</label>
            </div>

            <div className={styles.buttonParent}>
              <button className={styles.loginButton} type="submit">Login</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
