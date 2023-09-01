import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const redirect = import.meta.env.VITE_AUTH_REDIRECT_URI;

function LogoutButton() {

  const {
    isAuthenticated,
    logout
  } = useAuth0();

  function handleLogout() {
    logout({ returnTo: redirect });
  }

  return isAuthenticated &&
      <button onClick={handleLogout}>Log out</button>
    ;
}

export default LogoutButton;