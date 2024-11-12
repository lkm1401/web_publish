// 일반함수, 함수표현식(익명함수), 화살표(Arrow) 함수
// 일반함수 : function 함수명(파라미터, ...) { 실행문;  }
// 함수표현식 : let 함수명 = function (파라미터, ...){ 실행문;  }
// 화살표함수 : let 함수명 = (파라미터) => { 실행문; } 

/** 일반함수 정의시 let, const 사용불가 */
function add() {
    return 1+2;
}

/** 일반함수 표현식 */
let add2 = function () {
    return 1+2;
}

/** 화살표함수 표현식 */
let add3 = () => 1+2;
let add4 = (a, b) => a + b;
let add5 = (a, b, c) => {
    if( a>0 && b>0 && c>0){
        console.log(a+b+c);
    }else{
        console.log(`a,b,c 는 0보다 커야함`); 
    }
}

console.log(add());
console.log(add2());
console.log(add3());
console.log(add4(10, 20));
add5(1,2,-3);

