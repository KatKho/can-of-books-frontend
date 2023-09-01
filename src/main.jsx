import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const VITE_AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const VITE_AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID
const VITE_AUTH_REDIRECT_URI = import.meta.env.VITE_AUTH_REDIRECT_URI
// const VITE_AUTH_REDIRECT_URI_NETLIFY = import.meta.env.VITE_AUTH_REDIRECT_URI_NETLIFY
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('REDIRECT URI:' + VITE_AUTH_REDIRECT_URI);
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={VITE_AUTH_DOMAIN}
    clientId={VITE_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: VITE_AUTH_REDIRECT_URI,
    }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
