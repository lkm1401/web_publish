import React, { useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';

export default function Header({cartCount}) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log('isLoggedIn--> ', isLoggedIn); 
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

