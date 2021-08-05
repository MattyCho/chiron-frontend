import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {withAuth0} from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';
import '../css/header.css';
import chironLogo from '../css/chironLogoNoStars.png'

class Header extends React.Component {
  render() {
    return (
      <Navbar id="navBar">
        <img id="chironLogo" src={chironLogo} alt="logo"/>
        <Link id="link" to="/">Home</Link>
        <Link id="link" to="/profile">Profile</Link>
        <Link id="link" to="/exercises">Exercise Search</Link>
        <Link id="link" to="/favorites">Favorites</Link>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    )
  }
}

export default withAuth0(Header);