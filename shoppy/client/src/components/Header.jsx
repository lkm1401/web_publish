import React, { useContext, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from '../context/CartContext.js';
import { useCart } from "../hooks/useCart.js";
import axios from 'axios';

export default function Header() {
    const { getCartList, saveToCartList, getCount } = useCart();
    const { cartCount, setCartCount, setCartList, cartList } = useContext(CartContext);
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    //로그인 상태에 따라 cartCount 값 변경
    useEffect(()=>{
        if(isLoggedIn) {
            getCount();
            getCartList();
            //DB연동  로그인 id --> 갯수가져옴
            // const id = localStorage.getItem("user_id");
            // axios
            //     .post("http://localhost:9000/cart/count", {"id":id}) 
            //     .then((res) => {
            //         console.log('count-->', res.data.count);
            //         setCartCount(res.data.count);
            //         })
            //     .catch((error) => console.log(error));

            // axios
            //     .post("http://localhost:9000/cart/items", {"id":id}) 
            //     .then((res) => {
            //         console.log('list-->', res.data);
            //         setCartList(res.data);
            //         })
            //     .catch((error) => console.log(error));
        } else {
            setCartCount(0);
        }
    }, [isLoggedIn]);

    console.log('Header :: cartList---------->', cartList);
    console.log('Header :: cartCount---------->', cartCount);
    

    const handleLoginToggle = () => {
        if(isLoggedIn) {  // Logout 버튼 클릭!!!
            const select = window.confirm("정말로 로그아웃 하시겠습니까?");
            if(select) {
                localStorage.removeItem("token");
                localStorage.removeItem("user_id");
                setIsLoggedIn(false);
                navigate('/');
            }    
        } else {  // Login 버튼 클릭
            navigate('/login');
        }
    }   


    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart({cartCount})</Link>
                    <button type="button" onClick={handleLoginToggle}>
                        { isLoggedIn ? "Logout" : "Login" }
                    </button>
                    <Link to='/signup'>
                        <button type="button">Signup</button>
                    </Link>  
                    
                    { isLoggedIn && 
                        <Link to='/products/new'>
                            <button type="button">New Product</button>
                        </Link> 
                    }
                                        
                </nav>
            </div>
        </div>
    );
}

