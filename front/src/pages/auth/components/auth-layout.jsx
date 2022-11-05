import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="auth-layer center">
      <div className="logo-container">
        <img src="/assets/logo-white-sm.png" alt="logo" />
      </div>

      <Outlet />
    </div>
  );
}

export default AuthLayout;
