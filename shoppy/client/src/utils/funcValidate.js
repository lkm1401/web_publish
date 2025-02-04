import axios from "axios";

/*************************
    title : 로그인 폼 체크
**************************/
export const validateLogin = ({idRef, pwdRef}, {msgRef}) => {
    let result = true;

    if(idRef.current.value === '') {
        // alert('아이디를 입력해주세요');
        msgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        result = false;
    } else if(pwdRef.current.value === '') {
        // alert('패스워드를 입력해주세요');
        msgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        result = false;
    } else {
        msgRef.current.style.setProperty('color', 'white');
    }
    return result;
}


/**
 * title : 회원가입 폼 체크
 */
export const validateSignup = (refs, msgRefs, formData) => { 
    const refEntries = Object.entries(refs.current); 
    const msgRefEntries = Object.entries(msgRefs.current);
    
    //refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다!!
    for(let i=0; i<refEntries.length; i++) {
        const item = refEntries[i];        
        const name = item[0];
        const ref = item[1];    // 데이터 입력폼 객체 주소

        let msgItem, msgName, msgRef = null;

        if(i<refEntries.length-1) {
            msgItem = msgRefEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소 
        }

        if(name !== 'emaildomainRef') {  
            if(ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            } 
        } else { 
            
            if(ref.current.value === "default") {
                ref.current.focus();
                return false;
            } 
        }         
    } 
    return true;
} 

/***********************************
    Signup : 아이디 중복체크
************************************/
export const handleDuplicateIdCheck = (idRef, pwdRef, idMsgRef, setIdCheckResult) => {
    if(idRef.current.value === '') {
        idMsgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        return false;
    } else {
        /** 아이디 중복 체크 <--> 서버 연동 */
        axios
            .post('http://localhost:9000/member/idcheck', {"id":idRef.current.value})
            .then(res => {
                if(res.data.result === 1) {
                    alert("이미 사용중인 아이디 입니다. 새로운 아이디를 입력해주세요.");
                    idRef.current.focus();
                    return false;
                } else {
                    alert("사용이 가능한 아이디 입니다.");
                    setIdCheckResult("complete");
                    pwdRef.current.focus();
                    return false;
                }
            })
            .catch(error => console.log(error));        
    }
}

/****************************************
    Signup : 비밀번호&비밀번호 확인 체크
*****************************************/
export const handlePasswordCheck = (pwdRef, cpwdRef, nameRef, pwdMsgRef, cpwdMsgRef) => {
    if(pwdRef.current.value === "") {
        pwdMsgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        return false;
    } else if(cpwdRef.current.value === "") {
        cpwdMsgRef.current.style.setProperty('color', 'red');
        cpwdRef.current.focus();
        return false;
    } else {
        if(pwdRef.current.value === cpwdRef.current.value) {
            alert("비밀번호가 동일합니다.");
            nameRef.current.focus();
            return false;
        } else {
            alert("비밀번호가 다릅니다. 다시 입력해주세요.");
            pwdRef.current.value = "";
            cpwdRef.current.value = "";
            pwdRef.current.focus();
            return false;
        }
    }
}