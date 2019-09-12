import React, { Component } from 'react';

class Commitment extends Component {
    render() {
        return (
            <div>
                <div className="commitment">
                    <div className="container">
                        <h2>online store commitment</h2>
                        <div className="ke" />
                        <div className="row cmt">
                        <div className="col-md-3 col-sm-12">
                            <img src="./img/gia.png" alt="" />
                            <h6>original price at factory</h6>
                            <p>-30% in the market</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <img src="./img/kichthuoc.png" alt="" />
                            <h6>custom size</h6>
                            <p>Size on request</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <img src="./img/mausac.png" alt="" />
                            <h6>color options</h6>
                            <p>Choose as you like</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <img src="./img/sanxuat.png" alt="" />
                            <h6> quick production</h6>
                            <p>5-7 days from the date of order</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Commitment;