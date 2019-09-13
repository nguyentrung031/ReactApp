import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainHome from '../component/mainHome/MainHome';
import MainProduct from '../component/mainProduct/MainProduct';
import MainDetall from '../component/mainDetall/MainDetall';
import About from '../component/about/About';

class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                <Route path="/" exact component={MainHome} />
                <Route path="/product/" component={MainProduct} />
                <Route path="/detall/:slug.:id.html" component={MainDetall} />
                <Route path="/about/" component={About} />
            </div>
            </Router>
        );
    }
}

export default RouterURL;