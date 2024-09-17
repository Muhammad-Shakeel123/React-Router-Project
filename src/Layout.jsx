import React from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        className="flex-grow"
        style={{
          backgroundImage: "url('path-to-your-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
