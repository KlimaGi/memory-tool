import React from 'react';
import { Link } from 'react-router-dom';
import styles from './public-page-style.module.scss';

function PublicPage() {
  return (
    <div className={`${styles['auth-layer']} center`}>
      <div className="center">

        <div>
          <img src="/assets/logo-white-sm.png" alt="logo" />
        </div>

        <Link className={styles['button-link']} to="/auth/login">
          <div className={styles['button-link']}>
            Login
          </div>
        </Link>

        <Link className={styles['button-link']} to="/auth/register">
          <div className={styles['button-link']}>
            Register
          </div>
        </Link>

      </div>
    </div>
  );
}

export default PublicPage;
