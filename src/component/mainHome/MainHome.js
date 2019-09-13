import React, { Component } from 'react';
import Slideone from './Slideone';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3PNew from './Section3PNew';
import Commitment from './Commitment';
import Section4PHot from './Section4PHot';

class MainHome extends Component {
    render() {
        return (
            <div>
                <Slideone></Slideone>
                <Section1></Section1>
                <Section2></Section2>
                <Section3PNew></Section3PNew>
                <Commitment></Commitment>
                <Section4PHot></Section4PHot>
            </div>
        );
    }
}

export default MainHome;