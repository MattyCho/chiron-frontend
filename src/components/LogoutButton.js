import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../css/header.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button id="logButton" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
