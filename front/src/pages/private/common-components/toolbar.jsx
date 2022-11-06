import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../../../context/main-context';
import Button from './button';
import styles from './common-styles.module.scss';

function Toolbar() {
  const { user } = useContext(MainContext);
  console.log('user', user);
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem('secret');
    nav('/auth/login');
  };

  return (
    <div className={styles['toolbar-container']}>
      <div>
        <img src="/assets/logo-white-sm.png" alt="logo" />
      </div>

      <div className={styles.toolbar}>
        <Link to="/dashboard/today">Today</Link>
        <Link to="/dashboard/allTopics">All</Link>
        <Link to="/dashboard/create">Create</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Button func={logout} text="logout" />
        {
          // <img src={user.photo} alt="" className="avatar-img" />
        }
      </div>
    </div>
  );
}

export default Toolbar;
