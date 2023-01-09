/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { post } from '../../../plugins/http.ts';
import Button from '../../private/common-components/button';
import styles from './styles/auth-style.module.scss';

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const [error, setError] = useState('');
  const nav = useNavigate();

  const register = async () => {
    const registerData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };

    const res = await post('register', registerData);
    setError(res.message);
    if (!res.error) {
      console.log('res.data', res.data);
      sessionStorage.setItem('secret', res.data);
      nav('/auth/login');
    }
    console.log('registerData res', res);
  };

  return (
    <div className={styles.form}>
      <input ref={emailRef} type="text" placeholder="email" autoFocus />
      <input ref={passwordRef} type="text" placeholder="password" />
      <input ref={password2Ref} type="text" placeholder="repeat password" />

      <Button func={register} text="register" />
      <span className={styles['error-msg']}>{error}</span>
      <p>
        If you already registered, let's
        <Link to="/auth/login">Login</Link>
      </p>
    </div>

  );
}

export default Register;
