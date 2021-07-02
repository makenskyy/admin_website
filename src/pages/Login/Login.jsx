import React from 'react'
import './login.css'

export default function Login() {
  return (

    <>
      <div className="login">
        <div className="loginContainer">
          <h1>Signin to admin website</h1>
          <form className="loginForm">
            <div
              className="inputField">
              <input type="text" required />
              <span></span>
              <label>Username</label>
            </div>

            <div
              className="inputField">
              <input type="text" required />
              <span></span>
              <label>Password</label>
            </div>

            <div className="buttonParent">
              <button className="loginButton">Login</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
