import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct() {
    const { pid } = useParams(); 
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        axios.get('/data/products.json')  // http://localhost:3000/data/products.json
            .then((res) => {
                res.data.filter((product)=>{
                    if(product.pid === pid ) setProduct(product);
                });                
            })
            .catch((error)=> console.log(error));
    }, []);

    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={product.image} />
                <ul>
                        <li className="product-detail-title">{product.name}</li>
                        <li className="product-detail-title">{product.price}</li>
                        <li className="product-detail-subtitle">{product.info}</li>
                        <li>
                            <span className='product-detail-select1'>옵션 : </span>
                            <select className='product-detail-select2'>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                            </select>
                        </li>
                        <li>
                            <button type="button" className='product-detail-button'>장바구니 추가</button>
                        </li>
                </ul>
            </div>
    </div>
    );
}

