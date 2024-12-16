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