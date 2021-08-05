import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import '../css/exerciseSearch.css';

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      focusArea: '',
      focusCategories: ['abs', 'arms', 'back', 'calves', 'chest', 'legs', 'shoulders']
    }
  }

  handleNameSubmit = (e) => {
    e.preventDefault();
    let filteredFav = this.props.exerciseArray.filter(value => value.name.toLowerCase().includes(this.state.name.toLowerCase()));
    this.props.setFilteredArray(filteredFav);
  }

  handleFocusAreaSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.focusArea);
    let filteredFav = this.props.exerciseArray.filter(value => value.category.toLowerCase().includes(this.state.focusArea.toLowerCase()));
    console.log(filteredFav);
    this.props.setFilteredArray(filteredFav);
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formExerciseName">
            <Form.Label>Exercise Name</Form.Label>
            <div id="formDiv">
              <Form.Control id="controlSearch" type="text" placeholder="Search for Exercise by name" onChange={(e) => this.setState({ name: e.target.value })} />
              <Button variant="dark" type="submit" onClick={this.handleNameSubmit}>
                Search by Name
              </Button>
            </div>
          </Form.Group>


          <Form.Group controlId="formFocusArea">
            <Form.Label>Focus Area</Form.Label>
            <div id="formDiv">
              <Form.Control id="controlSearch" as="select" onChange={(e) => this.setState({ focusArea: e.target.value })}>
                <option disabled selected>Search for Exercise by focus area</option>
                {this.state.focusCategories.map(value =>
                  <option>{value}</option>
                )}
              </Form.Control>
              <Button variant="dark" type="submit" onClick={this.handleFocusAreaSubmit}>
                Search by Focus Area
              </Button>
            </div>
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default withAuth0(ExerciseForm);
