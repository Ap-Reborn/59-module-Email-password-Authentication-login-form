import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Rigister/Rigister';
import RegisterRBS from './Component/RegisterRBS/RegisterRBS';
import RegisterBS from './Component/RegisterBS/RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rbs',
        element:<RegisterRBS></RegisterRBS>
      },
      {
        path:'/register-bs',
        element:<RegisterBS></RegisterBS>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
