import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function Carts({refreshStorage}) {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);

    
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
    }, [cartList]);

    /** 주문하기 이벤트 처리*/
    const handleOrder = (type, pid, size) => {
        // console.log(type, pid, size);
        const id = localStorage.getItem("user_id");
        let formData = [];
        if(type === "all") {    //주문하기 - 전체상품 DB 저장
            formData = { id: id, cartList: cartList };  // [ {},{},{}] 주문하기
        } else {    //계속담아두기 - 개별상품 DB 저장
            const filterItem = cartList.filter(item => item.pid === pid && item.size === size);
            formData = { id: id, cartList: filterItem}
        }

        //1. 로그인 여부 체크
        if (isLoggedIn) {
            axios
                .post("http://localhost:9000/cart/add", formData)
                .then((res) => {
                    // console.log(res.data)
                    if (res.data.result_rows) {
                        alert("장바구니에 추가되었습니다.");
                        if(type === "all") {
                            //주문하기 페이지 이동
                            clearStorageAll();
                            refreshStorage([], 0);   
                        } else {
                            //로컬스토리지 개별아이템 삭제
                            const updateCart = clearStorageEach(pid, size);
                            refreshStorage(updateCart, updateCart.length);
                        }
                    }
                })
                .catch((error) => console.log(error));
        } else {
        //로그인 X --> 로그인 > DB 연동 후 저장
        window.confirm("로그인이 필요한 서비스입니다.") && navigate("/login");
        }
    };

    //로컬스토리지 개별아이템 삭제
    const clearStorageEach = (pid, size) => {
        const updateCart = cartList.filter((item)=> !(item.pid===pid && item.size===size));
        // console.log('updateCart ---> ' ,updateCart);
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(()=>{
            setCartList([...updateCart]);
        },0);
        
        return updateCart;
    };


    //로컬스토리지 전체아이템 삭제
    const clearStorageAll = () => {
        console.log('-----------> 로컬스토리지 전체 삭제 시작');        
        localStorage.removeItem("cartItems");  
        navigate("/cart");
        // setTimeout(()=>{
        //     setCartList([]);
        // }, 0);        
        console.log('-----------> 로컬스토리지 전체 삭제 종료');
    }

    

    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <button onClick={()=>{ handleOrder("all") }}>주문하기</button>
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



