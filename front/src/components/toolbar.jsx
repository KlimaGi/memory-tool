import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../context/main-context';
import Button from './button';

const Toolbar = () => {
  const { user } = useContext(MainContext);
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("secret");
    nav('/auth/login');
  }

  return (
    <div className='toolbar-container'>
      <div>
        <img src='/assets/logo-white-sm.png' alt='logo' />
      </div>

      <div className='toolbar'>
        {!user &&
          <>
            <Link to='/auth/register'>Register</Link>
            <Link to='/auth/login'>Login</Link>
          </>
        }
        {user &&
          <>
            <Link to='/profile'>Profile</Link>
            <Link to='/create'>Create</Link>
            <Link to='/allPosts'>All</Link>
            <Button func={logout} text='logout' />
          </>
        }

      </div>
    </div>
  )
}

export default Toolbar;
