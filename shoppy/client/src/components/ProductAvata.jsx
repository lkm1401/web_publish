import React from 'react';

export default function ProductAvata({img}) {
    return (
        <div className='product-avata'>
            <img src={img} alt="product image" />
        </div>
    );
}

