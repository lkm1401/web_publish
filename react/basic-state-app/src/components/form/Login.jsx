import React, { useState, useRef } from 'react';

export default function Login() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {'id':'', 'password':''};
    const [form, setForm] = useState(initForm);

    const handleChangeForm = (event) => {
        const {name, value} = event.target;     
        setForm({...form, [name]:value});  
    }

    const validate = () => {
        let result = true;
        if(idRef.current.value === '') {
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            result = false;
        } else if(passwordRef.current.value === '') {
            alert('패스워드를 입력해주세요');
            passwordRef.current.focus();
            result = false;
        } 

        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validate()) {
            console.log(form);    
        }
        //로그인폼에 입력된 값 ---> 서버(express, WAS, ...)   
    }

    return (
        <div>
            <h1>Login</h1>
            <form name="login-form" onSubmit={handleSubmit}> 
                <div>
                    <label>아이디</label>
                    <input  type="text" 
                            name="id" 
                            value={form.id}
                            ref={idRef}
                            onChange={handleChangeForm}/> 
                </div>
                <div>
                    <label>패스워드</label>
                    <input  type="password" 
                            name="password"  
                            value={form.password}
                            ref={passwordRef}
                            onChange={handleChangeForm}/> 
                </div>
                <div>
                    <button type="submit" >로그인</button>
                </div>                
            </form>
        </div>
    );
}

