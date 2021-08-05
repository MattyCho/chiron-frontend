import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div id='footerDiv'>
                <section>
                    <Link id='aboutUsLink' to='/aboutUs'>About Us</Link>
                </section>
            </div>
        )
    }
}

export default Footer;