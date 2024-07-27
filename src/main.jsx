import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import routes from './Routes/routes';
import Authprovider from './Authentication/Authprovider/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={routes} />
    </Authprovider>
  </React.StrictMode>,
)
