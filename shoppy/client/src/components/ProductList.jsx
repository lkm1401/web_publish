import React, { useState, useEffect } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]); // list변경시 실시간 업데이트

    useEffect(()=>{
        axios.get('http://localhost:9000/product/all')
            .then(res => setList(res.data))
            .catch((error) => console.log(error));
    }, []);


    //출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}]]
    const rows = [];
    for(let i=0; i < list.length; i+=3){ // [{0},{1},{2}]  
        rows.push(list.slice(i, i+3));  // [{0},{1},{2}]
    }

    return (
        <div>
            {   
                rows.map((rowArray, index) => 
                    <div key={index} className='product-list'>
                        {rowArray.map((product) => 
                            <Link key={product.pid} to={`/products/${product.pid}`}>
                                <ProductAvata img={`${product.image}`}/>
                            </Link>
                        )
                        }
                    </div>
                ) 
            }
        </div>
    );
}

