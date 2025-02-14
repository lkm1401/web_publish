import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function Carts({refreshStorage}) {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const [cartList, setCartList] = useState([]);

    useEffect(()=>{
        if(isLoggedIn) {
            //DB - shoppy_cart에서 정보 
            const id = localStorage.getItem("user_id");
            console.log('db');
            axios
                .post("http://localhost:9000/cart/items", {"id" : id})
                .then(res => setCartList(res.data))
                .catch();
        } else {
            //localStorage 
            console.log('localStorage ');
            addCartList();
        }
    }, [isLoggedIn]);
    

    /** 로컬스토리지 데이터 --> cartList add */
    const addCartList = () => {
        const items = localStorage.getItem("cartItems");
        setTimeout(()=>{
            setCartList([...JSON.parse(items)]);
        }, 0);
    }


    
    
    

    

    return (
        <div className="content">
            <h1>MyCart!!</h1>
            {/* <button onClick={()=>{ handleOrder("all") }}>주문하기</button> */}
            <table border="1">
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>
                    {
                        isLoggedIn && 
                        <>
                            <th>배송지 주소</th>
                            {/* <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th> */}
                        </>
                    }                
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.info}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>  
                            { isLoggedIn && <td>{item.zipcode}/{item.address}</td> }
                            {/* <td>
                                <button 
                                    onClick={()=>{ handleOrder("each", item.pid, item.size) }}> 계속담아두기 </button>
                            </td>                           */}
                        </tr>
                    )
                }
            </table>
            
        </div>
    );
}

