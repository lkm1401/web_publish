import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {   
    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);

    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateSignup(refs, msgRefs)) {
            console.log('submit ---->> ', formData);        
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
                                                    onChange={handleChangeForm} >
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
                                                placeholder = {placeholders[name]} />
                                            {  name === "id" &&
                                                <> 
                                                    <button type="button"
                                                            >중복확인</button>
                                                    <input type="hidden" id="idCheckResult" value="default" />
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


