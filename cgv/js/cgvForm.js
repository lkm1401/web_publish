/*********************************************  
 *         패스워드/패스워드 확인 체크
 *********************************************/
function passwordCheck() {
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");

    if(pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if(cpwd.value === "") {
        cpwdMsg.style.color = "red";
        cpwd.focus();
    } else {
        if(pwd.value === cpwd.value) {
            alert("패스워드가 동일합니다");
        } else {
            alert("패스워드가 다릅니다. 다시 입력해주세요.");
            pwd.value = "";
            cpwd.value = "";
            pwdMsg.style.color = "red";
            cpwdMsg.style.color = "red";
            pwd.focus();
        }
    }

}

/*********************************************  
 *         아이디 중복체크
 *********************************************/
function idCheck(event) {
    const did = "test";
    const id = document.querySelector("#id");
    const idMsg = document.querySelector("#error-msg-id");

    if(id.value === "") {
        idMsg.style.color = "red";
        id.focus();
    } else {
        if(did === id.value.trim()) {
            alert("이미 사용중인 아이디입니다. 다시 입력해주세요");
            id.focus();
        } else {
            alert("사용이 가능한 아이디입니다.");
            document.querySelector("#idCheckResult").value = "success";
            console.log(document.querySelector("#idCheckResult").value);
            
            // event.target.style.backgroundColor = "gray";
        }
    }    
}

/*********************************************  
 *         회원가입 폼 체크
 *********************************************/
function joinFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");
    const emailname = document.querySelector("#emailname");
    const emaildomain = document.querySelector("#emaildomain");
    const idCheckResult = document.querySelector("#idCheckResult");

    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    const nameMsg = document.querySelector("#error-msg-name");
    const phoneMsg = document.querySelector("#error-msg-phone");
    const emailnameMsg = document.querySelector("#error-msg-emailname");

    if(id.value === "") {
        idMsg.style.color = "red";
        id.focus();
    } else if(pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if(cpwd.value === "") {
        cpwdMsg.style.color = "red";
        cpwd.focus();
    } else if(name.value === "") {
        nameMsg.style.color = "red";
        name.focus();
    } else if(phone.value === "" ) {
        phoneMsg.style.color = "red";
        phone.focus();
    } else if(emailname.value === "") {
        emailnameMsg.style.color = "red";
        emailname.focus();
    } else if(emaildomain.value === "default") {
        emaildomain.style.outlineColor = "red";
        emaildomain.focus();
    } else if(idCheckResult.value === "default") {
        alert("아이디 중복체크를 진행해주세요");        
    } else {
        alert("가입 성공!!!");
    }
}

/*********************************************  
 *         회원가입 폼 실시간 체크
 *********************************************/
function handleChangeJoin(event) {
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    const nameMsg = document.querySelector("#error-msg-name");
    const phoneMsg = document.querySelector("#error-msg-phone");
    const emailnameMsg = document.querySelector("#error-msg-emailname");
    const emaildomain = document.querySelector("#emaildomain");

    if(event.target.id === "id") {
        (event.target.value.trim().length !== 0) 
            ? idMsg.style.color = "green"
            : idMsg.style.color = "red";
    } else if(event.target.id === "pwd") {
        (event.target.value.trim().length !== 0) 
            ? pwdMsg.style.color = "green"
            : pwdMsg.style.color = "red";
    } else if(event.target.id === "cpwd") {
        (event.target.value.trim().length !== 0) 
            ? cpwdMsg.style.color = "green"
            : cpwdMsg.style.color = "red";
    } else if(event.target.id === "name") {
        (event.target.value.trim().length !== 0) 
            ? nameMsg.style.color = "green"
            : nameMsg.style.color = "red";
    } else if(event.target.id === "phone") {
        (event.target.value.trim().length !== 0) 
            ? phoneMsg.style.color = "green"
            : phoneMsg.style.color = "red";
    } else if(event.target.id === "emailname") {
        (event.target.value.trim().length !== 0) 
            ? emailnameMsg.style.color = "green"
            : emailnameMsg.style.color = "red";
    } else if(event.target.id === "emaildomain") {
        (event.target.value.trim() !== "default") 
            ? emaildomain.style.outlineColor = "green"
            : emaildomain.style.outlineColor = "red";
    }
}



/*********************************************  
 *         로그인 - 아이디, 패스워드 실시간 체크
 *********************************************/
function handleChange(event) {
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");

    if(event.target.id === "id") {
        (event.target.value.trim().length !== 0) ? 
            idMsg.style.color = "green" 
            : idMsg.style.color = "red";
    } else {
        (event.target.value.trim().length !== 0) ? 
            pwdMsg.style.color = "green" 
            : pwdMsg.style.color = "red";
    }    
}



/*********************************************  
 *         로그인 폼 체크
 *********************************************/
function loginFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const msgId = document.querySelector("#error-msg-id");
    const msgPwd = document.querySelector("#error-msg-pwd");

    if(id.value === '') {
        msgId.textContent = '아이디를 입력해주세요';
        msgId.style.fontSize = '12px';
        msgId.style.color = 'red';
        msgId.style.paddingTop = '10px';
        id.focus();
    } else if(pwd.value === '') {
        msgPwd.textContent = '패스워드를 입력해주세요';
        msgPwd.style.fontSize = '12px';
        msgPwd.style.color = 'red';
        msgPwd.style.paddingTop = '10px';
        pwd.focus();
    } else {
        //아이디 비교 로직 또는 함수 호출!!!!
        alert('입력완료!!');
    }
}
