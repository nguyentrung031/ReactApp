import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="icon">
                        <a href="/"><i className="fab fa-facebook-f" /></a>
                        <a href="/"><i className="fab fa-google-plus-g" /></a>
                        <a href="/"><i className="fab fa-instagram" /></a>
                        <a href="/"><i className="fab fa-youtube" /></a>
                        <a href="/"><i className="fab fa-twitter" /></a>
                        <a href="/"><i className="fab fa-android" /></a>
                        </div>
                        <h6>Copyright <i className="fa fa-copyright" aria-hidden="true" /> 2019 startuprr, All Rights Reserved</h6>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;