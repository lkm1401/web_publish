import EventItem from "./EventItem";
import {useState, useEffect} from 'react';

export default function Event() {
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch("/data/cgv_content.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData.eventList))
            .catch(error => console.log(error));
    }, []);

    return (
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">EVENT</h3>
                    <button className="total-view-button">전체보기 &gt;</button>
                </div>
                <ul className="content-event-list">
                    {list && list.map(item => 
                        <li>
                            <EventItem 
                                src={item.src}
                                title={item.title}
                                date={item.date}
                                />
                        </li>
                    )}
                </ul>
        </section> 
    );
}