import React, { useState, useRef, useContext } from 'react';
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { validateLogin } from '../utils/funcValidate.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export default function Login() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const refs = {
        "idRef" : useRef(null),
        "pwdRef" : useRef(null) 
    }  
    const msgRefs = {
        "msgRef" : useRef(null)
    }

    const [formData, setFormData] = useState({'id':'', 'pwd':''});

    /** form 데이터 입력 함수 */
    const handleChangeForm = (event) => {
        const {name, value} = event.target; 
        setFormData({...formData, [name] : value}); 
    }

    /** Submit 함수 */
    const handleLoginSubmit = (event) => {
        event.preventDefault();        
        if(validateLogin(refs, msgRefs)) {

            //리액트 ---> 노드서버(express) 데이터 전송 로그인
            axios
                .post('http://localhost:9000/member/login', formData)
                .then(res => {
                    // console.log('res.data-->', res.data) 
                    if(res.data.result_rows === 1) {
                        alert("로그인 성공!!");
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user_id", formData.id);                        
                        setIsLoggedIn(true);
                        navigate('/');
                    } else {
                        alert("로그인 실패!!");
                    }
                })
                .catch(error => {
                    alert("로그인 실패!!");
                    console.log(error);
                });    
            
        }
    }

    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            
            <form className="login-form" onSubmit={handleLoginSubmit}>            
                <ul>
                    <li>
                        <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
                    </li>
                    <li>                        
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaUser/></span>
                            <input type="text" 
                                    name="id" 
                                    id="id" 
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaLock/></span>
                            <input type="password" 
                                    name="pwd" 
                                    id="pwd" 
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
                    </li>
                    <li><span style={{fontSize: "0.7em", color:"white"}}
                                ref={msgRefs.msgRef}>아이디 또는 패스워드를 입력해주세요</span></li>
                    <li>
                        <button type="submit" className="login-button">로그인</button>
                    </li>
                    <li>
                        <div  className="login-form-checkbox">
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">패스워드 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="login-button-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div className="loginplus-image">
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}

