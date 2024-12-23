import React from 'react';

export default function CodingBar({title, percent}) {
    return (
        <>
            <div class="bar__metadata"><span>{title}</span><span>{percent}%</span></div>
            <div class="bar__bg"><div class="bar__value" style={{"width": `${percent}%`}}></div></div>
        </>
    );
}

