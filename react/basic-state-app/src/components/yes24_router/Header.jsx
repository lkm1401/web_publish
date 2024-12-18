import React from 'react';

export default function Header({children}) {
    return (
        <div style={{'width':'1000px', 'margin':'auto'}}>
            {children}
        </div>
    );
}

