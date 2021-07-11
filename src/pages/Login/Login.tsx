import React, { useState } from 'react'
import styles from './login.module.scss'

import { useDispatch } from 'react-redux';

import { loginAction } from '../../store/authReducer';

import { useHistory, Redirect } from 'react-router';


export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();


  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(loginAction({ username: username }));
    // < Redirect to='/dashboard' />
    history.push('/dashboard');
  }

  return (

    <>
      <div className={styles.login}>
        <div className={styles.loginContainer}>
          <h1>Signin to admin website</h1>
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
