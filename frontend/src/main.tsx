import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import RegiterPage from './pages/RegisterPage';

const router = createBrowserRouter([{
    path : "/",
    element : <HomePage />,
    errorElement : <ErrorPage />
  },
  {
    path : "/login",
    element : <LoginPage />,
    errorElement : <ErrorPage />
  },
  {
    path : "/register",
    element : <RegiterPage />,
    errorElement : <ErrorPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
