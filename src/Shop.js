import React from 'react';
import Cart from './containers/Cart';
import Upload from './containers/Upload';
import ProductList from './containers/ProductList';

const Shop = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Shopping chart Sofa</h1>
                </div>
                <div className="col-md-12">
                    <Upload />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default Shop;
