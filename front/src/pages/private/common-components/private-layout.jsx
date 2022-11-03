import React from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from './toolbar';

const PrivateLayout = () => {
  return (
    <div>
      <Toolbar />
      <Outlet />
    </div>
  )
}

export default PrivateLayout;
