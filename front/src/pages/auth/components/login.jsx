import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { post } from '../../../plugins/http';
import Button from '../../../components/button';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const nav = useNavigate();

  async function login() {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const res = await post('login', loginData);
    console.log('loginData res', res);

    localStorage.setItem('secret', res.data.secret);
    if (res.error) return setError(res.message);

    nav("/dashboard/profile");
  }

  return (
    <div className='container form'>
      <input ref={emailRef} type='text' placeholder='email' />
      <input ref={passwordRef} type='text' placeholder='password' />

      <Button func={login} text="login" />
      <span className='error-msg'>{error}</span>
      <p>Don't have an account, let's <Link to='/auth/register'>Register</Link></p>
    </div>
  )
}

export default Login;
