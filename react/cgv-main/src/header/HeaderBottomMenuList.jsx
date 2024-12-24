import HeaderBottomMenu from './HeaderBottomMenu.jsx';
import {useState, useEffect} from 'react';
import { fetchJSON } from '../js/commons.js';

export default function HeaderBottomMenuList() {
    const [names, setNames] = useState([]);
    
    useEffect(() => {
        fetchJSON("data/cgv_header.json")
            .then(result => setNames(result.bottomMenuList))
            .catch(error => console.log(error));

        // fetch("/data/cgv_header.json")
        //     .then(data => data.json())
        //     .then(jsonData => setNames(jsonData.bottomMenuList))
        //     .catch(error => console.log(error));
    }, []);

    // const menuItems = [];
    // names && names.forEach(item => {
    //     menuItems.push (
    //         <li key={item.name}>
    //             <HeaderBottomMenu name={item.name} />
    //         </li>
    //     );
    // });
    
    return (
        <ul class="flex-container">
            {names && names.map(item => 
                <li>
                    <HeaderBottomMenu name={item.name} />
                </li>           
            )}
        </ul>
    );
}