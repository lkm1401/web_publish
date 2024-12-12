import React, {useState} from 'react';

export default function Counter2({total, click}) {
    const [count, setCount] = useState(0);

    return (
        <div style={{width:500,margin:'auto'}}>
            <div>
                <span style={{fontSize:27}}>{count}</span>
                <span>/</span>
                <span style={{fontSize:30}}>{total}</span>
            </div>
            <button type="button" onClick={() => { 
                setCount(count+1);
                click('+');
            }}>증가</button>
            <button type="button">감소</button>
        </div>
    );
}

