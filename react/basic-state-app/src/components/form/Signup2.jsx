import React, {useState, useRef} from 'react';
import { validateFormSignup2 } from '../../apis/validate.js';
import { initFormNames} from '../../apis/initial.js';

export default function Signup2() {
    const initArray = [
        'id', 'pass', 'name', 'phone1', 'phone2', 'phone3', 
        'address', 'birth1', 'birth2', 'birth3', 'job', 
        'gender', 'email', 'intro'
    ];

    const refs = {
        idRef:useRef(null), 
        passRef:useRef(null), 
        nameRef:useRef(null), 
        phone1Ref:useRef(null), 
        phone2Ref:useRef(null), 
        phone3Ref:useRef(null), 
        addressRef:useRef(null), 
        birth1Ref:useRef(null), 
        birth2Ref:useRef(null), 
        birth3Ref:useRef(null), 
        jobRef:useRef(null), 
        genderRef:useRef(null), 
        emailRef:useRef(null), 
        introRef:useRef(null)
    }
    
    const [formData, setFormData] = useState(initFormNames(initArray));
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateFormSignup2(refs)) console.log(formData);        
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">아이디</label>
                        <input type="text"
                                name="id"
                                value={formData.id}
                                ref={refs.idRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">패스워드</label>
                        <input type="password"
                                name="pass"
                                value={formData.pass}
                                ref={refs.passRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">이름</label>
                        <input type="text"
                                name="name"
                                value={formData.name}
                                ref={refs.nameRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">전화</label>
                        <input type="text"
                                name="phone1"
                                value={formData.phone1}
                                ref={refs.phone1Ref}
                                onChange={handleChangeForm}/>-
                        <input type="text"
                                name="phone2"
                                value={formData.phone2}
                                ref={refs.phone2Ref}
                                onChange={handleChangeForm}/>-
                        <input type="text"
                                name="phone3"
                                value={formData.phone3}
                                ref={refs.phone3Ref}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">주소</label>
                        <input type="text"
                                name="address"
                                value={formData.address}
                                ref={refs.addressRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">생일</label>
                        <input type="text"
                                name="birth1"
                                value={formData.birth1}
                                ref={refs.birth1Ref}
                                onChange={handleChangeForm}/>/
                        <input type="text"
                                name="birth2"
                                value={formData.birth2}
                                ref={refs.birth2Ref}
                                onChange={handleChangeForm}/>/
                        <input type="text"
                                name="birth3"
                                value={formData.birth3}
                                ref={refs.birth3Ref}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">직업</label>
                        <select name="job" 
                            ref={refs.jobRef}
                            onChange={handleChangeForm}>
                            <option value="default">선택</option>
                            <option value="frontend">프론트엔드개발자</option>
                            <option value="backend">백엔드개발자</option>
                            <option value="system">시스템관리자</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">성별</label>
                        <input type="radio" name="gender" value="m"
                                ref={refs.genderRef}
                                onChange={handleChangeForm}/>남
                        <input type="radio" name="gender" value="f"
                                ref={refs.genderRef}
                                onChange={handleChangeForm}/>여
                    </li>
                    <li>
                        <label htmlFor="">이메일</label>
                        <input type="text"
                                name="email"
                                value={formData.email}
                                ref={refs.emailRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">자기소개</label>
                        <textarea rows='10' cols='50'
                            name="intro"
                            value={formData.intro}
                            ref={refs.introRef}
                            onChange={handleChangeForm}
                            ></textarea>
                    </li>
                    <li>
                        <button type="submit">회원가입</button>
                        <button>취소</button>
                    </li>
                </ul>
            </form> 
        </div>
    );
}

