import React from 'react';
import { Card } from 'react-bootstrap';
import DavidPhoto from '../css/small-headshot.jpg';
import MattPhoto from '../css/mattProfilePic.jpg';
import '../css/designersPage.css'


class DesignersPage extends React.Component {

    render() {
        return (
            <div>
                <div id='aboutUsContent'>
                    <h1>How We Got Here</h1>
                    <p>content will go here </p>
                </div>
                <div id='cardDiv'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DavidPhoto} />
                        <Card.Body>
                            <Card.Title>David Whitmore</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Tray Chea</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={MattPhoto} />
                        <Card.Body>
                            <Card.Title>Matt Cho</Card.Title>
                            <Card.Text>
                                Matt is a Seattle native, born and raised. Growing up in the pacific northwest has instilled in him a love for nature, travel, and the outdoors. After studying at the University of Washington, he earned a degree in physiology and promptly decided that medical school was not in his future. He joined CodeFellows looking to pursue his interests and begin a career as a software developer. On rainy Seattle days, Matt can be found drinking an Irish Coffee and enjoying a good book or playing video games.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }

}


export default DesignersPage;