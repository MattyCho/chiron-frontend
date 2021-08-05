import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
// import LogoutButton from './LogoutButton'
// import Login from "./Login.js";
import Profile from './Profile.js';
import Header from './Header.js';
import Homepage from './Homepage.js';
import Exercises from './Exercises.js';
import Favorites from './Favorites.js'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignersPage from './designersPage';
import Footer from './Footer.js';


class App extends React.Component {

  componentDidMount() {
    this.getExercises();
  }

  getExercises = () => {
    this.props.auth0.getIdTokenClaims()
      .then(async res => {
        const jwt = res.__raw;

        const config = {
          headers: { "authorization": `Bearer ${jwt}` },
          baseURL: process.env.REACT_APP_SERVER,
          url: '/exercise',
          params: { email: this.props.auth0.user.email },
          method: 'get'
        }
        await axios(config);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Router>

          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route exact path='/profile'>
              {this.props.auth0.isAuthenticated &&
                <Profile />}
            </Route>

            <Route exact path='/exercises'>
              {this.props.auth0.isAuthenticated &&
                <Exercises />}
            </Route>

            <Route exact path='/favorites'>
              {this.props.auth0.isAuthenticated &&
                <Favorites />}
            </Route>

            <Route exact path='/aboutUs'>
                <DesignersPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default withAuth0(App);
