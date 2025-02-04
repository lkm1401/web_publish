import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';
import { validateSignup, 
            handleDuplicateIdCheck, 
            handlePasswordCheck} from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {   
    const navigate = useNavigate();
    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);
    const [idCheckResult, setIdCheckResult] = useState('default');

    
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});       
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateSignup(refs, msgRefs, formData)) {    
            if(idCheckResult === "default") {
                alert("중복 확인을 진행해 주세요");
                return false;
            } else {
                console.log('submit ---->> ', formData); 
                //서버 --> DB 테이블에 insert
                //GET : URL 통해 호출 및 데이터 전달 => 패킷의 Header => req.params, 보안필요X, 작은데이터
                //POST : URL 주소로 경로 호출, 데이터 전달 => 패킷의 Body => req.body, 보안필요O, 큰데이터
                axios.post('http://localhost:9000/member/signup', formData)
                        .then(res => {
                            if(res.data.result_rows === 1){
                                alert("회원가입에 성공하셨습니다.");
                                // window.location.href = '/login';

                                //1초후에 로그인 페이지 이동 --> useNavigate
                                setTimeout(()=>{
                                    navigate('/login');
                                }, 1000);
                            } else {
                                alert("회원가입에 실패하셨습니다.");
                            }
                        })
                        .catch(error => {
                            alert("회원가입에 실패하셨습니다.");
                            console.log(error);
                        });            

            }   
        } 
    }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name)=>(
                            <li>
                                <label for="" ><b>{labels[name]}</b></label>
                                <span ref={msgRefs.current[name.concat("MsgRef")]}>{labels[name]}를 입력해주세요</span>
                                <div>
                                    { (name === "emailname") ? (
                                        <>
                                            <input type="text"
                                                    name={name}
                                                    ref={refs.current[name.concat("Ref")]} 
                                                    onChange={handleChangeForm}
                                                    placeholder={placeholders[name]} />
                                            <span>@</span>       
                                            <select name="emaildomain" 
                                                    ref={refs.current["emaildomainRef"]}
                                                    onChange={handleChangeForm}
                                                    >
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>
                                            <input type={(name==="pwd" || name==="cpwd") ? "password" : "text"}
                                                name={name}
                                                ref={refs.current[name.concat("Ref")]}
                                                onChange={handleChangeForm}
                                                onBlur={(name === 'cpwd') ? ()=>{
                                                        handlePasswordCheck(
                                                            refs.current["pwdRef"],
                                                            refs.current["cpwdRef"],
                                                            refs.current["nameRef"],
                                                            msgRefs.current["pwdMsgRef"],
                                                            msgRefs.current["cpwdMsgRef"]
                                                        )
                                                    } : null}
                                                placeholder = {placeholders[name]} />
                                            {  name === "id" &&
                                                <> 
                                                    <button type="button"
                                                            onClick={()=>{
                                                                handleDuplicateIdCheck(
                                                                                refs.current["idRef"],
                                                                                refs.current["pwdRef"],
                                                                                msgRefs.current["idMsgRef"],
                                                                                setIdCheckResult
                                                                )
                                                            }}
                                                            >중복확인</button>
                                                    {/* <input type="text" value={idCheckResult}  /> */}
                                                </> 
                                            } 
                                        </>
                                    )}                                  
                                </div>
                            </li>
                        ))
                    }
                
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


