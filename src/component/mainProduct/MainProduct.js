import React, { Component } from 'react';
import Breadcrum from './Breadcrum';
import ProductWrap from './ProductWrap';
class MainProduct extends Component {
    render() {
        return (
            <div>
                <Breadcrum></Breadcrum>
                <main>
                    <ProductWrap></ProductWrap>
                </main>
                
            </div>
        );
    }
}

export default MainProduct;