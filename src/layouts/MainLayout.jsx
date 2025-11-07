import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-surfaceDark">
      <Header />
      <main
        id="main-content"
        role="main"
        className="flex-1 container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
