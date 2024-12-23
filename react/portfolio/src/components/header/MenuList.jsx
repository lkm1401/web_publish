import React from 'react';
import Menu from './Menu.jsx';

export default function MenuList() {
    const list = [
        {"href": "#home", "name":"Home"},
        {"href": "#about", "name":"About"},
        {"href": "#skill", "name":"Skills"},
        {"href": "#work", "name":"My work"},
        {"href": "#testimonial", "name":"Testimonial"},
        {"href": "#contact", "name":"Contact"}
    ];

    return (
        <nav>
            <ul className="header__menu">
                {list && list.map((menu) => 
                    <li>
                        <Menu href={menu.href} 
                                menuName={menu.name}
                                />
                    </li>                
                )}
            </ul>
        </nav>
    );
}

