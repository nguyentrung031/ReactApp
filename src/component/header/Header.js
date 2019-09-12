import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="btn-group">
                            <button type="button" className="btn border dropdown-toggle my-md-4 my-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                USD
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/">VN-VND</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center">
                            <h2 className="my-md-3 site-title">Online Store</h2>
                        </div>
                        <div className="col-md-4 col-12 text-right">
                            <p className="my-md-4 header-links">
                            <a href="/" className="px-2" data-toggle="modal" data-target="#exampleModalScrollable"><i className="fas fa-sign-in-alt pr-2" />Sign In</a>
                            <a href="/" className="px-1" data-toggle="modal" data-target="#exampleModalScrollable2">Create an
                                Account</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="container-fluid p-0 " id="header01">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/product/">products</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="products.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                collection
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/detall/">detail</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about/">about us</a>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button>
                            </form>
                        </div>
                        <div className="navbar-nav">
                            <li className="nav-item border shoping-icon mx-2">
                            <a href="/"><i className="fa fa-shopping-basket p-2" /></a>
                            </li>
                        </div></nav>
                    </div>
                    </header>

            </div>
        );
    }
}

export default Header;