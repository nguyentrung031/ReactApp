import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="Breadcrum my-md-4">
                    <div className="container-fluid">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                        </nav>
                    </div>
                </section>
                {/* Main */}
                <main>
                    <div className="container about-us">
                        <h1>ABOUT US</h1>
                        <div className="ke" />
                        <div className="content-text">
                        <p><i className="fas fa-address-book pr-2" /><small>Address: </small>ngõ 117, Trần Cung, cổ nhuế 1, Hà
                            Nội.</p>
                        <p><i className="fa fa-phone pr-2" aria-hidden="true" /><small>Phone: </small>0392389977</p>
                        <p><i className="fas fa-envelope pr-2" /><small>Mail: </small>trung9977.mta@gmail.com</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default About;