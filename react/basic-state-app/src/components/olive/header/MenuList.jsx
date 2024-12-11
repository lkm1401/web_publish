import React, {useState} from 'react';
import Menu from './Menu.jsx';

export default function MenuList({count}) {
    const menuList = [
        {"name": "회원가입"},
        {"name": "로그인"},
        {"name": "장바구니"},
        {"name": "주문배송"},
        {"name": "고객센터"},
        {"name": "올영매장"},
        {"name": "Global"},
    ];
    
    return (       
        <ul>         
            {menuList.map( item => 
                <li>
                    <Menu name={item.name}
                            count={count} />
                </li>
            )}
        </ul>
    );
}

