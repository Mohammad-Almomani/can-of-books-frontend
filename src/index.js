import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import dotenv from 'dotenv';
import { Auth0Provider } from "@auth0/auth0-react";
// require('dotenv').config();
  console.log(process.env.REACT_APP_AUTH0_DOMAIN_KEY)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN_KEY}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);