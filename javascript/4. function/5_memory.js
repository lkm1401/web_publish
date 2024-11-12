// function은 데이터타입 ?? object
function add(a, b) {
    console.log(a + b);
}

let sum = add; // call by reference
console.log(add);
console.log(sum);
add(1,3);
sum(1,2);
console.log('--- 프로그램 종료 ---');




