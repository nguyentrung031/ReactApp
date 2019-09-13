import React, { Component } from 'react';

class Breadcrum extends Component {
    render() {
        return (
            <div>
                <section className="Breadcrum my-md-4">
                    <div className="container-fluid">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                        </nav>
                    </div>
                </section>

            </div>
        );
    }
}

export default Breadcrum;