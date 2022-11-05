import React from 'react';
import { Link } from 'react-router-dom';

function PublicPage() {
  return (
    <div className="auth-layer center">
      <div className="center">

        <div>
          <img src="/assets/logo-white-sm.png" alt="logo" />
        </div>

        <Link className="button-link" to="/auth/login">
          <div className="button-link">
            Login
          </div>
        </Link>

        <Link className="button-link" to="/auth/register">
          <div className="button-link">
            Register
          </div>
        </Link>

      </div>
    </div>
  );
}

export default PublicPage;
