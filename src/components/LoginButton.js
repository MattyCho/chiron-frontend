import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/header.css';

function LoginButton() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <button id="logButton" onClick={loginWithRedirect}>Login</button>
  )
}

export default LoginButton;
