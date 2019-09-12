import React, { Component } from 'react';
import data from './../data.json';
import NewItem from './NewItem';

class ProductWrap extends Component {
    render() {
        return (
             <div className="container wrap">
                    <div className="menu">
                        <h3>menu products</h3>
                        <hr />
                        <ul className="menu-nav">
                        <li className="menu-item">
                            <a href="/"><i className="fas fa-angle-right pr-2" />furniture(100)</a>
                            <div className="drop">
                            <a href="/">Home Sofa(100)</a>
                            <a href="/">Sofa cafe(150)</a>
                            <a href="/">Sofa korare(340)</a>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="/"><i className="fas fa-angle-right pr-2" />bedroom furniture(150)</a>
                        </li>
                        <li className="menu-item">
                            <a href="/"><i className="fas fa-angle-right pr-2" />Dining room utensils(300)</a>
                        </li>
                        <li className="menu-item">
                            <a href="/"><i className="fas fa-angle-right pr-2" />home decoration(250)</a>
                        </li>
                        <li className="menu-item">
                            <a href="/"><i className="fas fa-angle-right pr-2" />lights &amp; lighting equipment(149)</a>
                        </li>
                        </ul>
                    </div>
                    <div className="product-wrap">
                        {/* <div class="btn-group">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Sort Price
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button class="dropdown-item" type="button">low to high</button>
                                    <button class="dropdown-item" type="button">high to low</button>
                                </div>
                            </div> */}
                        <div className="row">
                            {
                                data.map(function(value, key){
                                    return(
                                        <NewItem key={key} 
                                        TinId={value.id} 
                                        image={value.img} 
                                        Name={value.name}
                                        Price={value.price}>                                          
                                         </NewItem>
                                    )
                                })

                            }
 
                        </div>
                    </div>
                    <div className="pag ">
                        <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
        );
    }
}

export default ProductWrap;