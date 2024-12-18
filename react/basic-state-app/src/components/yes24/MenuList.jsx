import Menu from './Menu.jsx';

export default function MenuList({list, click}) {
    //MenuList <-- Menu
    const handleMenuClickReq= (category) => {
        click(category);
    }

    return (
        <ul className="menu-container">
            { list && list.map((item) => 
                    <li><Menu  name={item.name} 
                                href={item.href}
                                bg={item.bg}
                                color={item.color}
                                category={item.category}
                                click ={handleMenuClickReq}
                                /></li>) }
        </ul>
    );
}