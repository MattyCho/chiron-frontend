import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

class Profile extends React.Component {
    componentDidMount() {
        if (this.props.auth0.isAuthenticated) {
            this.props.auth0.getIdTokenClaims()
                .then(res => {

                    const jwt = res.__raw;

                    const config = {
                        method: 'get',
                        headers: { 'Authorization': `Bearer ${jwt}` },
                        baseURL: 'REACT_APP_SERVER',
                        url: '/profile'
                    }

                    axios(config)
                        .then(results => console.log('hit profile', results))
                        .catch(err => console.error(err))
                });
        }
    }

    render() {
        const { user } = this.props.auth0;
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.picture} />
                    <Card.Body>
                        <Card.Title> Hello {user.name}!</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Email: {user.email}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}


export default withAuth0(Profile);
