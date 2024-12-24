import React from 'react';

export default function Category({name, count, style, click}) {
    return (
        <button className={style}
                onClick={()=>{click(name)} }
        >{name}<span className="category__count">{count}</span></button>
    );
}

