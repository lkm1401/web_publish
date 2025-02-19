import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from "../context/CartContext.js";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/cart.css";

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList, cartCount, totalPrice } = useContext(CartContext);
    const { getCartList, updateCartList, deleteCartItem } = useCart();
    const hasCheckedLogin = useRef(false);      
    
    useEffect(()=>{  
        if (hasCheckedLogin.current) return;  // true:로그인 상태 -->  블록 return
            hasCheckedLogin.current = true; 

        if(isLoggedIn) {
            getCartList();
        } else {  
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
            select ?  navigate('/login') :  navigate('/');
            setCartList([]);
        }
    } , [isLoggedIn]);

    
    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
        {
            cartList && cartList.map(item => 
            <div key={item.cid}>
                <div className="cart-item" key={item.cid} >
                <img src={item.image} alt={item.pname} />
                <div className="cart-item-details">
                    <p className="cart-item-title">{item.pname}</p>
                    <p className="cart-item-title">{item.size}</p> 
                    <p className="cart-item-price">
                    {item.price}원
                    </p>
                </div>
                <div className="cart-quantity">
                    <button onClick={() => {
                        item.qty>1 && updateCartList(item.cid, "decrease")
                    }}>
                    -
                    </button>
                    <input type="text" value={item.qty} readOnly />
                    <button onClick={() => {updateCartList(item.cid, "increase")}}>
                    +
                    </button>
                </div>
                <button className="cart-remove" onClick={()=>{deleteCartItem(item.cid)}}>
                    <RiDeleteBin6Line />
                </button>
                </div> 
            </div>
            )
        }  

        {/* 주문버튼 출력 시작 */}
        { cartCount ? 
            <>
                <div className="cart-summary">
                    <h3>주문 예상 금액</h3>
                    <div className="cart-summary-sub">
                        <p className="cart-total"><label>총 상품가격 :</label><span>{totalPrice.toLocaleString()}원</span></p>
                        <p className="cart-total"><label>총 할인 :</label><span>-0원</span></p>
                        <p className="cart-total"><label>총 배송비 :</label><span>+0원</span> </p>
                    </div>
                    <p className="cart-total2"><label>총 금액 :</label><span>{totalPrice.toLocaleString()}원</span></p>
                </div>
                <div className="cart-actions">                      
                    {/* <Link to="/checkout"> */}
                        <button onClick={()=>{ navigate("/checkout") }}>주문하기</button>                    
                        {/* <button onClick={navigate("/checkout")}>주문하기</button>                     */}
                    {/* </Link> */}
                </div>
            </> 
            : 
            <div >                       
                <p>장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/all">상품보러 가기</Link> <br/><br/></p>
                <img src="https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQyU5RSVBNSVFQiVCMCU5NCVFQSVCNSVBQyVFQiU4QiU4OHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div> 
        }       
        {/* 주문버튼 출력 종료 */}      
        
        </div>
    );
    }

