import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function LoginButton() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Login</button>
  )
}

export default LoginButton;
