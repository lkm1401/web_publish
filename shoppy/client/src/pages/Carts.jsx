import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Carts() {
    /** 장바구니 아이템 저장 : 배열 */
    const [cartList, setCartList] = useState(()=> {
        try {
            const initCartList = localStorage.getItem("cartItems");
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류:", error);
            return []; // 오류 발생 시 빈 배열 반환
        }
    });

    //pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가
    const pids = cartList && cartList.map(item => item.pid);  // [5, 11]  

    useEffect(()=>{
        if(pids.length > 0){
            axios
            .post("http://localhost:9000/product/cartItems", {"pids" : pids})
            .then(res =>{
                //cartItems에 res.data의 정보 추가
                const updateCartList = cartList.map((item, i) => {
                    const filterItem = res.data.find((ritem)=> ritem.pid === item.pid); 
                    return filterItem ? 
                        {
                            ...item, 
                            "pname": filterItem.pname,
                            "price": filterItem.price,
                            "description": filterItem.description,
                            "image": filterItem.image
                        } 
                        : item
            });
                setCartList(updateCartList);
            })
            .catch(error => console.log(error));
        }// if
    }, []);

    /** 주문하기 이벤트 처리*/
    const handleOrder = () => {
        //1. 로그인 여부 체크 
        //로그인 --> DB 연동 후 저장
        //로그아웃 --> 로그인 > DB 연동 후 저장
    }


    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <button onClick={handleOrder}>주문하기</button>
            <table border="1">
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>                
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>                            
                        </tr>
                    )
                }
            </table>
            
        </div>
    );
}

