import SpecialItem from "./SpecialItem";
import {useState, useEffect} from 'react';

export default function Special() {
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("/data/cgv_content.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData.specialList))
            .catch(error => console.log(error));
    }, []);

    return (
        <section>
            <div className="content-title-style">
                <h3>특별관</h3>
                <button className="total-view-button">전체보기 &gt;</button>
            </div>
            <div className="special-content-list">
                <div>
                    <img src="/images/special1.png" 
                            alt="Special Image"
                            width="400px" />
                </div>
                <ul>
                    {list && list.map(item => 
                        <li>
                            <SpecialItem 
                                text1 = {item.text1}
                                text2 = {item.text2}/>
                        </li> 
                    )}
                </ul>
            </div>
        </section> 
    );
}