import React, { Component } from 'react';
import data from './../data.json';
import NewProduct from './NewProduct';

class Section3PNew extends Component {
    render() {
        return (
            <div>
                <section className="section3-product-new">
                    <div className="container">
                        <div className="product-title">
                        <h1>product new</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="row product">
                            {
                                data.map((value,key) => {
                                    if(key <=4 )
                                    {
                                        return (
                                            <NewProduct key={key} 
                                            TinId={value.id}
                                            image={value.img}
                                            Name={value.name}
                                            Content={value.content}></NewProduct>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="product-btn">
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

export default Section3PNew;