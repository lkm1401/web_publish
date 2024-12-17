/**
 * Signup2Form 유효성 체크 함수
 */
export function validateFormSignup2(refs) { 
    /** !!! 배열.map() or 배열.forEach() 함수는 배열객체를 순회하는 것이
     * 목적이므로 if 체크후 focus가 적용되지 않음!!!
     */
    const refEntries = Object.entries(refs);
    console.log(refEntries);
    const msgs = {
        'idRef':'아이디', 'passRef': '패스워드',

    };    

    for(const item of refEntries) {
        const name = item[0];
        const ref = item[1];
        if(ref.current.value === '') {
            alert(`${msgs[name]}를 입력해주세요`);
            ref.current.focus();            
            return false;
        }
    }    

    // let checkResult = true;

    // if(refs.idRef.current.value === '') {
    //     alert('아이디 입력');
    //     refs.idRef.current.focus();
    //     checkResult = false;
    // }

    // return checkResult;
}



/**
 * CgvLoginForm 유효성 체크 함수
 * @returns 
 */
export const validationFormCheck = (param) => {
    let result = true;

    if(param.refs.idRef.current.value === '') {
        // alert("아이디를 입력해주세요");
        param.setErrors({...param.errors, ['id']:'아이디를 입력해주세요'});
        param.refs.idRef.current.focus();
        result = false;
    } else if(param.refs.pwdRef.current.value === '') {
        // alert("패스워드를 입력해주세요");
        param.setErrors({...param.errors, ['pwd']:'패스워드를 입력해주세요'});
        param.refs.pwdRef.current.focus();
        result = false;
    }
    return result;
}


/**
 * Login2 컴포넌트 유효성 체크 함수
 */
export const validateLogin2 = (param) => {
    let result = true;
    if(param.idRef.current.value === '') {
        // alert("아이디를 입력해주세요");
        param.setErrorMsg({...param.errorMsg, ['id']:'아이디를 입력해주세요'});
        param.idRef.current.focus();
        result = false;
    } else if(param.passRef.current.value === '') {
        // alert("패스워드를 입력해주세요");
        param.setErrorMsg({...param.errorMsg, ['pass']:'패스워드를 입력해주세요'});
        param.passRef.current.focus();
        result = false;
    }
    return result;
}


/**
 * UserInfo 컴포넌트의 유효성 체크 함수
 */
export const validateForm = (refs) => {
    let result = true;
    if(refs.nameRef.current.value === '') {
        alert('이름을 입력해주세요');
        refs.nameRef.current.focus();
        result = false;
    } else if(refs.addressRef.current.value === '') {
        alert('주소를 입력해주세요');
        refs.addressRef.current.focus();
        result = false;
    } else if(refs.ageRef.current.value === '') {
        alert('나이를 입력해주세요');
        refs.ageRef.current.focus();
        result = false;
    }
    return result;
}

/**
 * Signup 컴포넌트의 유효성체크 함수
 */
export const validateSignup = (refs, errors, setErrors) => {
    let checkResult = true;
    if(refs.idRef.current.value === '') {
        // alert("아이디 입력");
        setErrors({...errors, ['id']:'아이디를 입력해주세요'});
        // refs.idRef.current.style.setProperty('color', 'red');
        refs.idRef.current.focus();
        checkResult = false;
    } else if(refs.pwdRef.current.value === '') {
        // alert("패스워드 입력");
        setErrors({...errors, ['pwd']:'패스워드를 입력해주세요'});
        refs.pwdRef.current.focus();
        checkResult = false;
    } else if(refs.cpwdRef.current.value === '') {
        // alert("cpwd 입력");
        setErrors({...errors, ['cpwd']:'패스워드 확인을 입력해주세요'});
        refs.cpwdRef.current.focus();
        checkResult = false;
    } else if(refs.nameRef.current.value === '') {
        // alert("name 입력");
        setErrors({...errors, ['name']:'이름을 입력해주세요'});
        refs.nameRef.current.focus();
        checkResult = false;
    } else if(refs.phoneRef.current.value === '') {
        // alert("phone 입력");
        setErrors({...errors, ['phone']:'전화번호를 입력해주세요'});
        refs.phoneRef.current.focus();
        checkResult = false;
    } else if(refs.emailNameRef.current.value === '') {
        // alert("emailName 입력");
        setErrors({...errors, ['emailName']:'이메일주소를 입력해주세요'});
        refs.emailNameRef.current.focus();
        checkResult = false;
    } else if(refs.emailDomainRef.current.value === 'default') {
        // alert("emailDomain 선택");
        refs.emailDomainRef.current.focus();
        checkResult = false;
    } 

    return checkResult;
}


/**
 * Signup 컴포넌트 아이디 중복체크 함수  
 */
export const handleIdCheck = (idRef, errorCheckSignup, errors, setErrors, idMsgRef) => {
    const id = idRef.current;
    if(id.value === '') {
        errorCheckSignup('id', id.value, errors, setErrors);
    } else {
        const did = 'test';
        if(did === id.value) {                
            setErrors({...errors, ['id']:'이미 사용중인 아이디 입니다. 다시 입력해주세요.'});
            id.focus();
        } else {
            setErrors({...errors, ['id']:'사용이 가능한 아이디입니다.'});
            idMsgRef.current.style.setProperty('color','green');
            idMsgRef.current.style.setProperty('font-weight', 'bold');
        }
    }
}