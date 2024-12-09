import AirbnbComponent from "./AirbnbComponent";
import {useState, useEffect} from 'react';
import './Airbnb.css';

export default function AppAirbnb() {
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("/data/airbnb.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData))
            .catch(error => console.log(error));
    }, []);
    

    return (
        <ul>
            {list && list.map((item)=> 
                <li>
                    <AirbnbComponent 
                                img={item.img} 
                                d1={item.d1}
                                d2={item.d2}
                                d3={item.d3}
                                d4={item.d4}
                                isGood={item.isGood}
                                color={item.color} />
                </li>            
            )}
        </ul>
    );
}