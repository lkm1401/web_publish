// 함수의 실행결과 반환 키워드 :: return
function add(a, b) {
    // a = parseInt(a);
    // console.log(parseInt(a) + parseInt(b));
    return (parseInt(a) + parseInt(b));
}
let result = add(1, 2);
console.log(`result = ${result}`);

// 이름, 나이를 매개변수로 입력하여, 객체를 생성한 후 
// 반환하는 함수를 정의해주세요.
console.clear();
function createObject(name, age) {
    let obj = {
        name: name,  
        age: age
    };
    return obj;  //obj의 주소값 반환
}

let resultObj = createObject("홍길동", 30);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

// 두 수를 입력받아 곱한값을 반환하는 함수를 작성해주세요.
// 두 수는 0보다 커야함
console.clear();
function multi(a, b) {
    let result = 0;
    if(a>0 && b>0) {
        result = a * b;
    } else {
        result = "a와 b는 0보다 커야합니다.";        
    }
    return result;
}

let result2 = multi(10,2);
console.log(result2);




