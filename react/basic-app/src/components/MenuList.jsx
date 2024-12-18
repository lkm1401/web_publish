import Menu from './Menu.jsx';

export default function MenuList({list}) {
    return (
        <ul className="menu-container">
            { list.map((item) => 
                    <li><Menu  name={item.name} 
                                href={item.href}
                                bg={item.bg}
                                color={item.color} /></li>) }
        </ul>
    );
}