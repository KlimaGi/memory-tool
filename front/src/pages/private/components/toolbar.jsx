import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../../../context/main-context';
import Button from '../../../components/button';

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
        <Link to='/dashboard/today'>Today</Link>
        <Link to='/dashboard/allTopics'>All</Link>
        <Link to='/dashboard/create'>Create</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Button func={logout} text='logout' />

      </div>
    </div>
  )
}

export default Toolbar;
