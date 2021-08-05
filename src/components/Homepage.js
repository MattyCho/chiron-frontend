import React from 'react';
import {withAuth0} from '@auth0/auth0-react';
import {Accordion, Card} from 'react-bootstrap'
import '../css/homepage.css';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Accordion id="homePageAccordion">
          <Card id="accordionCards">
            <Accordion.Toggle as={Card.Header} eventKey="0">
            Who Are We
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body id="accordionBody">
              Allow users to create a custom folder of exercises that they can reference for buidling workouts.
             
              Why should we care about your product?

One of the biggest road blocks to increasing your physical activite level is doing too much too fast. This app will give users more control over that pace to be able to stick to their exercise goals.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card id="accordionCards">
            <Accordion.Toggle as={Card.Header} eventKey="1">
            What we do
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body id="accordionBody">
                A lot of exercise apps come with predisigned workouts that may not be suitable for everyone's level of fitness and equipment. This app allows you to pick just the exercises you want.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card id="accordionCards">
            <Accordion.Toggle as={Card.Header} eventKey="2">
            Why we do it
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body id="accordionBody">
                One of the biggest road blocks to increasing your physical activite level is doing too much too fast. This app will give users more control over that pace to be able to stick to their exercise goals.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    )
  }
}

export default withAuth0(Homepage);