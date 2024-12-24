import React, {useState} from 'react';
import Category from './Category.jsx';

export default function Categories() {
    const [selected, setSelected] = useState('All');
    const handleSelected = (name) => {
        setSelected(name);
    }
    const categoryList = [
        {
            "name": "All",
            "count": 8
        },
        {
            "name": "Front-end",
            "count": 4
        },
        {
            "name": "Back-end",
            "count": 2
        },
        {
            "name": "Mobile",
            "count": 2
        },
    ];
    return (
        <ul class="categories">
            {categoryList && categoryList.map((category) =>  
                <li>
                    <Category 
                            name={category.name}
                            count={category.count}
                            click={handleSelected}
                            style={category.name === selected ?
                                    'category category--selected'
                                    : 'category'
                            }
                            />
                </li>
            )}
        </ul>
    );
}

