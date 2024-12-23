import React from 'react';
import Category from './Category.jsx';

export default function Categories() {
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
                            count={category.count} />
                </li>
            )}
        </ul>
    );
}

