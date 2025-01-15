import React from 'react';
import ProductList from '../components/ProductList.jsx';

export default function Products() {
    return (
        <div className="content">
            <h3 className="all-products-title">All Products</h3>
            <ProductList />
        </div>
    );
}

