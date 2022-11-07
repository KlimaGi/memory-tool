/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { post } from '../../../plugins/http';
import Button from '../../private/common-components/button';
import styles from './styles/auth-style.module.scss';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const nav = useNavigate();

  const login = async () => {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const res = await post('login', loginData);

    if (res.error) return setError(res.message);
    localStorage.setItem('secret', res.data.secret);

    return nav('/dashboard/allTopics');
  };

  return (
    <div className={`container ${styles.form}`}>
      <input ref={emailRef} type="text" placeholder="email" />
      <input ref={passwordRef} type="text" placeholder="password" />

      <Button func={login} text="login" />
      <span className={styles['error-msg']}>{error}</span>
      <p>
        Don't have an account, let's
        <Link to="/auth/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
