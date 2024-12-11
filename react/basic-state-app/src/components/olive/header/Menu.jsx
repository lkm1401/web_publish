import React from 'react';

export default function Menu({name, count}) {
    return (        
        <button type="button">{name}
            {name === '장바구니' ? <span>({count})</span> : '' }
        </button>
    );
}

