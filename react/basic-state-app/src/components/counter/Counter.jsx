import {useState} from 'react';

export default function Counter({total, click}) {
    const [number, setNumber] = useState(0); 

    function increment() {
        (number < 10) ? setNumber(number+1) : setNumber(number) ;
        click(number, '+');  
    }
    function decrement() {
        (number > 0) ? setNumber(number-1) : setNumber(0);
        click(number, '-');
    }

    return (
        <div className="container">
            <div>
                <span className="number">{number} /</span>
                <span className="total-number">{total}</span>
            </div>
            <button type="button"
                    className="button"
                    onClick={increment}
                    >증가(+)</button>
            <button type="button"
                    className="button"
                    onClick={decrement}
                    >감소(-)</button>
        </div>
    );
}