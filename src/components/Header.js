import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {withAuth0} from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/exercises">Exercise Search</Link>
        <Link to="/favorites">Favorites</Link>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    )
  }
}

export default withAuth0(Header);