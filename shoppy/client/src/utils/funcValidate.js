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
export const validateSignup = (refs, msgRefs) => { 
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
            if(ref.current.value === 'default') {
                ref.current.focus();
                return false;
            }
        }         
    } 
    return true;
} 

