import React, { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook() {
    const [totalQty, setTotalQty] = useState(0);
    const list = [
        {"img": "https://image.yes24.com/goods/13137546/L"},
        {"img": "https://image.yes24.com/goods/108422348/L"},
        {"img": "https://image.yes24.com/goods/103495056/L"},
    ];

    const handleChangeQty = (qty) => {
        setTotalQty(totalQty+qty);
    }

    return (
        <>
            <div>전체카트수량 : {totalQty} </div>
            {list.map((item) => 
                <div style={{display: 'flex'}}>
                    <img src={item.img} width="100px" />
                    <BestBookButton qtyChange={handleChangeQty}/>
                </div>
            )}
        </>
        
    );
}

