// 변수를 객체의 value로 사용하는 경우, property 생략가능
let name = "홍길동";
let age = 20;
const person = {
    name, age
}
console.log(person.name);
console.log(person.age);

let x = 0;  let y = 0;
const obj = { x, y};

let fname = "apple";
let emoji = "🍎";
let color = "Red";
const fruits = { fname, emoji, color};

console.log(obj);
console.log(fruits);

// 사원들의 정보를 입력받아서, 객체로 반환하는 함수를 정의
// 사원정보 - 사번(empno), 이름(ename), 나이(age)
function createObj(empno, ename, age) {
    return {empno, ename, age};
}
console.log(createObj('1234', '홍길동', 20));
console.log(createObj('7854', '김철수', 30));
let emp1 = createObj('1234', '홍길동', 20);  // {empno:"1234", ename:"홍길동", age:20}
let emp2 = createObj('7854', '김철수', 30);  // {empno:"7854", ename:"김철수", age:30}
/*
[ 
    {empno:"1234", ename:"홍길동", age:20},
    {empno:"7854", ename:"김철수", age:30}
]
*/

