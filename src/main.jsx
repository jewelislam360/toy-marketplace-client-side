import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import router from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-[80%]	mx-auto'>
    <React.StrictMode>
      
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
      

    </React.StrictMode>,
  </div>
)
