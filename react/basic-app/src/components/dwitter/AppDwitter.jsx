import Dwitter from "./Dwitter.jsx";
import './Dwitter.css';
import { useEffect, useState } from 'react';

export default function AppDwitter() {
    const [dwitters, setDwitters] = useState([]);

    useEffect(()=>{  // 맨처음 한번만 호출하도록 상태 관리
        fetch("data/dwitters.json")  //network을 통해 접속
        .then((result) => result.json())
        .then((jsonData) => setDwitters(jsonData))
        .catch(error => console.log(error));
    }, []);

    
    return (
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Signup</li>
            </ul>  

            { dwitters.map((dwitter) => 
                <Dwitter 
                    img= {dwitter.img}
                    name= {dwitter.name}
                    id= {dwitter.id}
                    date= {dwitter.date}
                    content= {dwitter.content} />       
            ) }

        </div>
    );
}