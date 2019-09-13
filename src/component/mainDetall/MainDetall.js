import React, { Component } from 'react';
import Beadecrum from './Beadecrum';
import data from './../data.json';
import NewRelated from './NewRelated';

class MainDetall extends Component {
    render() {
        // console.log(this.props.match.params.id);
        // console.log(typeof(this.props.match.params.id));
        // khai báo biến đếm cho trang tin liên quan
        var dem = 1;
        return (
            <div>
                <Beadecrum></Beadecrum>
                <main>
                {
                    data.map((value,key) => {
                        if(value.id == this.props.match.params.id)
                        {
                            return (
                                <div className="detail-wrap" key={key}>
                                <div className="container">
                                    <div className="col-md-5 detail-img">
                                    <img src={value.img} alt="" />
                                    </div>
                                    <div className="col-md-7 content">
                                    <h2><small>Name Product: </small>{value.name}</h2>
                                    <p>{value.content}</p>
                                    <form className="form-horizontal" >
                                        <div className="form-group">
                                        <label htmlFor="touchspin" className="col-md-2 control-label">Amount:</label><input id="touchspin" type="text" name="touchspin" className="col-md-1 form-control" style={{textAlign: 'center'}} />
                                        </div>
                                    </form>
                                    <span><small>Price: </small>${value.price}</span>
                                    <a href="/"><i className="fas fa-cart-plus" />Card</a>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        
                    })
                }
                    <hr></hr>
                    <section className="section2-slide-product">
                    <div className="container">
                        <div className="row slide-one">
                            {
                                data.map((value,key) => {
                                    if(value.id != this.props.match.params.id)
                                    {
                                        if(dem<= 6){
                                            dem++;
                                            return (
                                                <NewRelated key={key} 
                                                TinId={value.id}
                                                image={value.img}
                                                Name={value.name}> 
                                                </NewRelated>
                                            )
                                        }
                                    } 
                                    
                                })
                            }
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

                </main>
            </div>
        );
    }
}

export default MainDetall;