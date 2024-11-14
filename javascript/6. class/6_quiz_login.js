// 로그인 체크를 위한 클래스 정의
class User {
    #id;
    #pass;
    constructor(id, pass) {
        this.#id = id;
        this.#pass = pass;
    }
    get id() { return this.#id; }  
    get pass() { return this.#pass; }

    set id(id) { this.#id = id; }
    set pass(pass) { this.#pass = pass; }
}

/**
 * 로그인 버튼 클릭시 호출하는 함수
 */
let user = null;
const DID = "test";
const DPASS = "1234";
function loginCheck() {
    let id = document.querySelector("#id");  //id값이 입력되는 폼객체
    let pass = document.querySelector("#pass");

    if(id.value === "") {
        alert("아이디를 입력해주세요");
        id.focus();
    } else if(pass.value === "") {
        alert("패스워드를 입력해주세요");
        pass.focus();
    } else {
        //id, pass ==> User 클래스 객체 생성과 처리작업
        user = new User(id.value, pass.value);
        console.log(user.id, user.pass);
        
        if(DID === user.id && DPASS === user.pass) alert("로그인 성공!!");
        else alert("로그인 실패!!!");
    }
}

// const hong = new User("hong1234", "1234");
// console.log(`id: ${hong.id}, pass: ${hong.pass}`);
// hong.id = "hong12";
// hong.pass = "3456";
// console.log(`id: ${hong.id}, pass: ${hong.pass}`);
