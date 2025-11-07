import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Employee from '../pages/Employee';
import AddEditEmployee from '../pages/AddEditEmployee';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/employees',
        element: <Employee />,
      },
      {
        path: '/employees/add',
        element: <AddEditEmployee />,
      },
      {
        path: '/employees/edit/:id',
        element: <AddEditEmployee />,
      },
      { path: '*', element: redirect('/404') },
    ],
  },
]);

export default router;
