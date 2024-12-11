import React, {useState, useEffect} from 'react';
import Product from './Product';

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]);  //전체 상품 리스트

    useEffect(()=>{
        fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData => setProductList(jsonData))
            .catch();
    }, []);  

    const totalCart = (id) => {
        cart(id);       //AppOlive의 handleCartApp 함수 호출
    }    
    
    return (
        <ul className='product-list-container'>
            {productList && productList.map(item => 
                <li>
                    <Product 
                        totalCart = {totalCart}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        sprice={item.sprice}
                        isSale={item.isSale}
                        isCoupon={item.isCoupon}
                        isToday={item.isToday}
                        />
                </li>           
            )}
        </ul>
    );
}

