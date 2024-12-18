import React, {useState, useRef, useMemo} from 'react';
import { validateSignup, handleIdCheck , handlePasswordCheck} from '../../apis/validate.js';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import { initFormNames} from '../../apis/initial.js';
import './commons.css';
import './cgv.css';

export default function Signup() {
    const idMsgRef = useRef(null);
    const passMsgRef = useRef(null);
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailNameRef: useRef(null),
        emailDomainRef: useRef(null)
    }
    

    //폼데이터 저장소
    const names = ['id','pwd','cpwd','name','phone','emailName','emailDomain'];
    const [formData, setFormData] = useState(initFormNames(names));
    const [errors, setErrors] = useState(initFormNames(names));
    

    //폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});

        idMsgRef.current.style.setProperty('color','red');
        idMsgRef.current.style.setProperty('font-weight', 'normal');
        errorCheckSignup(name, value, errors, setErrors);
    }

    //폼의 입력이 종료된 후 Submit 함수
    const handleSubmitSignup = (event) => {
        event.preventDefault();
        if(validateSignup(refs, errors, setErrors)) console.log(formData);
    }

    return (
    <div className="content">
        <div className="join-form center-layout">
            <h1 className="center-title">회원가입</h1>
            <form onSubmit={handleSubmitSignup}>
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span id="error-msg-id" ref={idMsgRef}>{errors.id}</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    value={formData.id}
                                    ref={refs.idRef}
                                    onChange={handleChangeSignup}   
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" 
                                    onClick={() => {
                                        const param = {
                                            "idRef": refs.idRef, 
                                            "errorCheckSignup": errorCheckSignup,
                                            "errors": errors,
                                            "setErrors": setErrors,
                                            "idMsgRef": idMsgRef
                                        }
                                        handleIdCheck(param)
                                    }}> 중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span id="error-msg-pwd" ref={passMsgRef}>{errors.pwd}</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    value={formData.pwd}
                                    ref={refs.pwdRef}
                                    onChange={handleChangeSignup}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span id="error-msg-cpwd">{errors.cpwd}</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    value={formData.cpwd}
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeSignup}
                                    onBlur={()=> {
                                        const param = {
                                            'refs' : refs,
                                            'errorCheckSignup': errorCheckSignup,
                                            'errors': errors,
                                            'setErrors': setErrors,
                                            'passMsgRef': passMsgRef,
                                            'formData': formData,
                                            'setFormData': setFormData
                                        }
                                        handlePasswordCheck(param) }}
                                    placeholder="비밀번호 재입력"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span id="error-msg-name">{errors.name}</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    ref={refs.nameRef}
                                    onChange={handleChangeSignup}
                                    placeholder="이름을 입력해주세요"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>전화번호</b></label>
                        <span id="error-msg-phone">{errors.phone}</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    ref={refs.phoneRef}
                                    onChange={handleChangeSignup}
                                    placeholder="휴대폰 번호 입력('-' 포함)"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span id="error-msg-emailname">{errors.emailName}</span>
                        <div>
                            <input type="text" 
                                    name="emailName"
                                    id = "emailname"
                                    value={formData.emailName}
                                    ref={refs.emailNameRef}
                                    onChange={handleChangeSignup}
                                    placeholder="이메일 주소"/>
                            <span>@</span>       
                            <select name="emailDomain" 
                                    id="emaildomain"
                                    value={formData.emailDomain}
                                    ref={refs.emailDomainRef}
                                    onChange={handleChangeSignup}
                                    >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    );
}

