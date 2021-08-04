import React from 'react';
import {withAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap'

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesArray: [],
      
    }
  }

  componentDidMount() {
    let email = this.props.auth0.user.email;
    axios.get(`${process.env.REACT_APP_SERVER}/favExercise?email=${email}`)
    .then(exercises => this.setState({favoritesArray: exercises.data}))
  }

  removeFavorite = (id) => {
    this.props.auth0.getIdTokenClaims()
    .then(async res => {
      const jwt = res.__raw;

      const config = {
        headers: {"authorization" : `Bearer ${jwt}`}, 
        baseURL: process.env.REACT_APP_SERVER,
        url: '/exercise',
        data: { email: this.props.auth0.user.email,
                  id: id,
                },
        method: 'delete'
      }
      await axios(config)
      .then(exercises => this.setState({favoritesArray: exercises.data}))  
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <p>Favorites page</p>
        {
          this.state.favoritesArray.map((exercise, idx) => 
          <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text>
                  <div>
                    <p>{exercise.description}</p>
                    <p>{exercise.category}</p>
                    <p>{exercise.equipment}</p>
                  </div>
                </Card.Text>
                <Button onClick={() => this.removeFavorite(exercise._id)}variant="primary">Delete</Button>
              </Card.Body>
            </Card>
          )
        }
      </>
    )
  }
}

export default withAuth0(Favorites);
