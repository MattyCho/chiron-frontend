import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import ExerciseForm from './Form.js';
import '../css/exerciseSearch.css';
import ReactHtmlParser from 'react-html-parser';


class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseArray: [],
      filteredArray: [],
    }
  }

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
        const exercises = await axios(config);

        this.setState({ exerciseArray: exercises.data });
      })
      .catch(err => console.error(err));
  }



  setFilteredArray = (array) => {
    this.setState({
      filteredArray: array,
    })
  }

  addToFavorites = (name, description, category, equipment) => {
    this.props.auth0.getIdTokenClaims()
      .then(async res => {
        const jwt = res.__raw;

        const config = {
          headers: { "authorization": `Bearer ${jwt}` },
          baseURL: process.env.REACT_APP_SERVER,
          url: '/exercise',
          data: {
            email: this.props.auth0.user.email,
            username: this.props.auth0.user.name,
            name: name,
            description: description,
            category: category,
            equipment: equipment,
          },
          method: 'post'
        }
        await axios(config);


      })
      .catch(err => console.error(err));
  }


  render() {
    return (
      <>
        <ExerciseForm exerciseArray={this.state.exerciseArray} setFilteredArray={this.setFilteredArray} />
        <div id="exerciseCards">
          {this.state.filteredArray.length > 0 && this.state.filteredArray.map((exercise, idx) =>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text id="cardText">{ReactHtmlParser(exercise.description)}</Card.Text>
                <div id="favButton">
                  <Button id='addFavButton' onClick={() => this.addToFavorites(exercise.name, exercise.description, exercise.category, exercise.equipment)} variant="dark">Add to Favorites</Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </>
    )
  }
}

export default withAuth0(Exercises);
