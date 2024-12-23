import React from 'react';

export default function Category({name, count}) {
    return (
        <button class="category category--selected">{name}<span class="category__count">{count}</span></button>
    );
}

