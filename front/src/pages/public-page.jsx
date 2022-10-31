import React from 'react';
import { Link } from 'react-router-dom';

const PublicPage = () => {

  return (
    <div className='auth-layer center'>
      <div className='center'>

        <div>
          <img src='/assets/logo-white-sm.png' alt='logo' />
        </div>

        <Link to='/auth/login' >
          <div>
            Login
          </div>
        </Link>

        <Link to='/auth/register'>
          <div>
            Register
          </div>
        </Link>

      </div>
    </div>
  )
}

export default PublicPage;
