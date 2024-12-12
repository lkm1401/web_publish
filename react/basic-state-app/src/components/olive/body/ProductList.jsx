import React, {useState, useEffect} from 'react';
import Product from './Product';

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]);  //전체 상품 리스트
    const [list, setList] = useState([]);  //출력용 리스트

    useEffect(()=>{
        fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData => {
                setProductList(jsonData);
                setList(jsonData);
            })
            .catch();
    }, []);  

    const totalCart = (id) => {
        cart(id);       //AppOlive의 handleCartApp 함수 호출
    }    

    const [type, setType] = useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value);      
    }

    useEffect(()=> {
        if(type === 'total') {
            setList(productList);
        } else {
            const list = productList.filter((item) => {
                if(type === 'sale' && item.isSale ) {
                    return item;
                } else if(type === 'coupon' && item.isCoupon) {
                    return item;
                } else if(type === 'today' && item.isToday) {
                    return item;
                }
            });
            setList(list); 
        }                   
        
    }, [type]);  //useEffect : type
    
    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleTypeChange}/>전체
                <input type="radio" name="type" value="sale" onClick={handleTypeChange}/>세일
                <input type="radio" name="type" value="coupon" onClick={handleTypeChange}/>쿠폰
                <input type="radio" name="type" value="today" onClick={handleTypeChange}/>오늘드림
            </div>
            <ul className='product-list-container'>
                {list && list.map(item => 
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
        </>
    );
}

