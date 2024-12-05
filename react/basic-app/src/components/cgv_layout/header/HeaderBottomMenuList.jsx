import HeaderBottomMenu from './HeaderBottomMenu.jsx';

export default function HeaderBottomMenuList() {
    const names = [
        { "name": "영화" },   //item => item.name
        { "name": "극장" },
        { "name": "예매" },
        { "name": "스토어" },
        { "name": "이벤트" },
        { "name": "혜택" },
    ];

    return (
        <ul class="flex-container">
            {names.map(item => 
                <li>
                    <HeaderBottomMenu name={item.name} />
                </li>           
            )}
        </ul>
    );
}