import React, { Component } from 'react';

class Section1 extends Component {
    render() {
        return (
            <div>
                <section className="section1">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="img">
                            <img src="./img/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="title-text">
                            <h1>sofa cafe</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint ipsam. Nisi
                                aspernatur provident dolorem est doloribus. Accusamus deleniti quaerat, ab quasi
                                repudiandae, sequi fuga asperiores nobis impedit ex nulla?</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-md-6 col-sm-12 order-lg-2">
                            <div className="img">
                            <img src="./img/2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 order-lg-1">
                            <div className="title-text ">
                            <h1>sofa home</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint ipsam. Nisi
                                aspernatur provident dolorem est doloribus. Accusamus deleniti quaerat, ab quasi
                                repudiandae, sequi fuga asperiores nobis impedit ex nulla?</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="img">
                            <img src="./img/3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="title-text">
                            <h1>sofa South Korea</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint ipsam. Nisi
                                aspernatur provident dolorem est doloribus. Accusamus deleniti quaerat, ab quasi
                                repudiandae, sequi fuga asperiores nobis impedit ex nulla?</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Section1;