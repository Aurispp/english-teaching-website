// src/layouts/RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col bg-gradient-to-b from-amber-50/70 to-white">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;