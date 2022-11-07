import React, { useContext } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import MainContext from '../../../context/main-context';
import Icon from './icon';
import logoutIcon from './icons/logout.svg';
import create from './icons/create.svg';
import all from './icons/all.svg';
import profile from './icons/profile.svg';
import today from './icons/today.svg';
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
      <div className={styles.logo}>
        <img src="/assets/logo-white-sm.png" alt="logo" />
      </div>

      <div className={styles.toolbar}>
        <Link to="/dashboard/today">
          <Icon icon={today} text="today" />
        </Link>
        <Link to="/dashboard/allTopics">
          <Icon icon={all} text="all" />
        </Link>
        <Link to="/dashboard/create">
          <Icon icon={create} text="create" />
        </Link>
        <Link to="/dashboard/profile">
          <Icon icon={profile} text="profile" />
        </Link>

        <button
          onClick={logout}
          type="button"
          className={styles['button-link']}
        >
          <Icon icon={logoutIcon} text="logout" />
        </button>
        {
          // <img src={user.photo} alt="" className="avatar-img" />
        }
      </div>
    </div>
  );
}

export default Toolbar;
