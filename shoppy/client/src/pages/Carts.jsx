import React from "react";
import "../styles/cart.css";

export default function Carts() {


    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
                    <div className="cart-item" >
                    <img src="http://localhost:9000/upload_files/1739169710642-393528773-1.jpg" alt="" />
                    <div className="cart-item-details">
                        <p className="cart-item-title">코트</p>
                        <p className="cart-item-title">XS</p> 
                        <p className="cart-item-price">
                        1000원
                        </p>
                    </div>
                    <div className="cart-quantity">
                        <button >
                        -
                        </button>
                        <input type="text" value="1" readOnly />
                        <button >
                        +
                        </button>
                    </div>
                    <button
                        className="cart-remove"
                    >
                        🗑
                    </button>
                    </div>  
                    <div className="cart-actions">                       
                        <button>주문하기</button>
                    </div>       
        </div>
    );
    }

