import React, { Component } from 'react';

class Section2 extends Component {
    render() {
        return (
            <div>
                <section className="section2-slide-product">
                    <div className="container">
                        <div className="row slide-one">
                        <div className="col-md-2 produc-item">
                            <div className="img">
                            <a href="detail.html"> <img src="../img/1.jpg" alt="" /></a>
                            </div>
                            <div className="text">
                            <h6><i className="fas fa-couch pr-2" />sofa cafe</h6>
                            </div>
                        </div>
                        <div className="col-md-2 produc-item">
                            <div className="img">
                            <img src="../img/2.jpg" alt="" />
                            </div>
                            <div className="text">
                            <h6><i className="fas fa-couch pr-2" />sofa home</h6>
                            </div>
                        </div>
                        <div className="col-md-2 produc-item">
                            <div className="img">
                            <img src="../img/3.jpg" alt="" />
                            </div>
                            <div className="text">
                            <h6><i className="fas fa-couch pr-2" />sofa karea</h6>
                            </div>
                        </div>
                        <div className="col-md-2 produc-item">
                            <div className="img">
                            <img src="../img/10.jpg" alt="" />
                            </div>
                            <div className="text">
                            <h6><i className="fas fa-couch pr-2" />sofa japan</h6>
                            </div>
                        </div>
                        <div className="col-md-2 produc-item">
                            <div className="img">
                            <img src="../img/9.jpg" alt="" />
                            </div>
                            <div className="text">
                            <h6><i className="fas fa-couch pr-2" />sofa vietnam</h6>
                            </div>
                        </div>
                        <div className="col-md-2 produc-item">
                            <div className="img">
                            <img src="../img/8.jpg" alt="" />
                            </div>
                            <div className="text">
                            <h6><i className="fas fa-couch pr-2" />sofa usa</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="slide-btn">
                        <span className="prev position-top">
                        <i className="fa fa-chevron-left" aria-hidden="true" />
                        </span>
                        <span className="next position-top">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                        </span>
                    </div>
                </section>

            </div>
        );
    }
}

export default Section2;