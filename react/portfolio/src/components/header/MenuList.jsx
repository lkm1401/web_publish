import React, {useState} from 'react';
import Menu from './Menu.jsx';

export default function MenuList() {
    const [selected, setSelected] = useState('Home');
    const list = [
        {"href": "#home", "name":"Home"},
        {"href": "#about", "name":"About"},
        {"href": "#skill", "name":"Skills"},
        {"href": "#work", "name":"My work"},
        {"href": "#testimonial", "name":"Testimonial"},
        {"href": "#contact", "name":"Contact"}
    ];

    const handleClick = (menuName) => {
        setSelected(menuName);
    }
    

    return (
        <nav>
            <ul className="header__menu">
                {list && list.map((menu) => 
                    <li>
                        <Menu href={menu.href} 
                                menuName={menu.name}
                                click={handleClick}
                                style={menu.name === selected ? 
                                            'header__menu__item active'
                                        :   'header__menu__item'
                                }
                                />
                    </li>                
                )}
            </ul>
        </nav>
    );
}

