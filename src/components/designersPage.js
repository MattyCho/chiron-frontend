import React from 'react';
import { Card } from 'react-bootstrap';
import DavidPhoto from '../css/small-headshot.jpg';
import MattPhoto from '../css/mattProfilePic.jpg';
import trayPhoto from '../css/trayHeadshot.jpg'
import '../css/designersPage.css'


class DesignersPage extends React.Component {

    render() {
        return (
            <div>
                <div id='aboutUsContent'>
                    <h1>How We Got Here</h1>
                    <p>Within the build of this application we wanted to to ensure it had specific functionalities such as:
                    </p>
                    <p>
                    The ablility to login and see thier profile with thier selected favorite exercises.

                    For fitness enthusiast, we wanted give the ability to find exercises that work on specific areas of body.

                    For the health conscious individual, we wanted to give the ability  find lots of different exercises.

                    For the frugal, we wanted to the user to be able to find exercises that do not require expensive gym equipment.
                    </p>
                    <p>
                    This application was built with React.js in conjunction with various technologies ie: BootStrap, Axios, Auth0, React-Html-Parser, MongoDB Atlas, API: https://wger.de/en/software/api
                    </p>
                </div>
                <div id='cardDiv'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DavidPhoto} />
                        <Card.Body>
                            <Card.Title>David Whitmore</Card.Title>
                            <Card.Text>
                               David was born and raised in the PNW, and probably will never leave. He is a fullstack software developer in JavaScript with a background in health care where he refined skills of customer engagement and creating solutions and services for the specific needs of his customers. David started his journey into tech in this year with self teaching and now full time classes at Code Fellows. When he is not coding, David spends time with his wife and corgi puppy.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={trayPhoto} />
                        <Card.Body>
                            <Card.Title>Tray Chea</Card.Title>
                            <Card.Text>
                            Tray is a Seattle based Software Developer.  He is an air force veteran. His hobbies include: anything food related, botany/plants, snowboarding, knitting, polishing opals, and fawning over his cat. He has a knack for oddball adventures like climbing up city rooftops and looking for artist graffiti all over town to photograph. He also has a thriving curiosity for all things language. Imagine this; from point of origin of human civilization, somehow, we have come up with thousands of different languages that span the entire planet. How? Why?
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
