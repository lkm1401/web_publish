import React, { useState, useRef } from 'react';
import { validateLogin2 } from '../../apis/validate';

export default function Login2() {
    const idRef = useRef(null);
    const passRef = useRef(null);
    const [formData, setFormData] = useState({'id':'', 'pass':''});
    const [errorMsg, setErrorMsg] = useState({'id':'', 'pass':''});

    const handleChange = (event) => {
        const {name, value} = event.target;        
        setFormData({...formData, [name]:value});
        if(name === 'id') {
            (value === '') ? 
            setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['id']: ''})
        } else if(name === 'pass') {
            (value === '') ? 
            setErrorMsg({...errorMsg, ['pass']:'패스워드를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['pass']: ''})
        };            
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const param = {
            'idRef': idRef,
            'passRef': passRef,
            'errorMsg': errorMsg,
            'setErrorMsg': setErrorMsg
        };
        if(validateLogin2(param)) console.log(formData);        
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="">아이디</label>
                    <input type="text" 
                            name="id" 
                            value={formData.id}
                            ref={idRef}
                            onChange={handleChange}/>
                    <span style={{'color':'red'}}>{errorMsg.id}</span>
                </li>
                <li>
                    <label htmlFor="">패스워드</label>
                    <input type="password" 
                            name="pass" 
                            value={formData.pass}
                            ref={passRef}
                            onChange={handleChange}/>
                    <span style={{'color':'red'}}>{errorMsg.pass}</span>
                </li>
                <li>
                    <button type="submit">로그인</button>
                </li>
            </ul>
        </form>
    );
}

