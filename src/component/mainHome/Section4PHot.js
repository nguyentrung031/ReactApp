import React, { Component } from 'react';
import data from './../data.json';
import NewProduct from './NewProduct';

class Section4PHot extends Component {
    render() {
        return (
            <div>
                <section className="section4-product-hot">
                    <div className="container">
                        <div className="product-title">
                        <h1>product hot</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="row product-hot">
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
                                    else {return false;}
                                })
                            }
                        </div>
                    </div>
                    <div className="product-btn-hot">
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

export default Section4PHot;