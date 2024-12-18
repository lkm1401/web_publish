import React from 'react';

export default function BestBookAvatar({rank, img}) {
    return (
        <div className='container-avatar'>
            <p>{rank}</p>
            <img src={img} alt="book img" />
        </div>
    );
}

