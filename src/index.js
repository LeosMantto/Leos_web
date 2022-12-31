import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import DashboardCustom from './pages/dashboard/dashboard';

const Template = () => (
    <>
      <App />
    </>
);

const router = createBrowserRouter([

  {
    element: <Template />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/dashboard" />
      },
      {
        path: '/dashboard',
        element: <DashboardCustom />
      },
      {
        path: '/lavado_pipas',
        element: <div>Pagina de ingreso de registros de lavado de pipas......</div>
      },
      {
        path: '*',
        element: <div>404 Pagina no encontrada.......</div>
      }
    ]
  }

 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

