import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


function Login() {
  return (
    <div className="login-container">
      <div className='form-login'>
        <ul className="login-nav">
          <li className="login-nav__item active">
            <Link to="#">Sign In</Link>
          </li>
          <li className="login-nav__item">
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
        <label className="login__label">
          Username
        </label>
        <input id="login-input-user" className="login__input" type="text" />
        <label className="login__label">
          Password
        </label>
        <input id="login-input-password" className="login__input" type="password" />
        <label className="login__label--checkbox">
          <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
          Keep me Signed in
        </label>
        <button className="login__submit" disabled>Sign in</button>
      </div>       
    </div>
  );
}

export default Login;
