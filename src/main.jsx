import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const VITE_AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const VITE_AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={VITE_AUTH_DOMAIN}
    clientId={VITE_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
