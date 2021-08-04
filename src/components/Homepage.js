import React from 'react';
import {withAuth0} from '@auth0/auth0-react';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div>
          <h2>Who we are</h2>
        </div>
        <div>
          <h2>What we do</h2>
        </div>
        <div>
          <h2>Why we do it</h2>
        </div>

      </>
    )
  }
}

export default withAuth0(Homepage);
