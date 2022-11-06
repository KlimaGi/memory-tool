import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles/auth-style.module.scss';

function AuthLayout() {
  return (
    <div className={styles['auth-layer']}>
      <div className={styles['logo-container']}>
        <img src="/assets/logo-white-sm.png" alt="logo" />
      </div>

      <Outlet />
    </div>
  );
}

export default AuthLayout;
