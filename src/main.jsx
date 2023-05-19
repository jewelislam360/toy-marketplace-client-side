import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvidr from './Providers/AuthProvidr';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-[75%]	mx-auto'>
    <React.StrictMode>
     <AuthProvidr>
      <RouterProvider router={router} />
      </AuthProvidr>
  </React.StrictMode>,
  </div>
)
