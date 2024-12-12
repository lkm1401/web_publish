import React, {useState} from 'react';
import Counter2 from './Counter2';

export default function AppCounter2() {
    const [total, setTotal] = useState(0);

    const handleTotal = (type) => {
        type === '+' ? setTotal(total+1) : setTotal(total-1) ;
    }

    return (
        <div>
            <Counter2 total={total} click={handleTotal} />
            <Counter2 total={total} click={handleTotal}/>
            <Counter2 total={total} click={handleTotal}/>
            <Counter2 total={total} click={handleTotal}/>
            <Counter2 total={total} click={handleTotal}/>
        </div>
    );
}

