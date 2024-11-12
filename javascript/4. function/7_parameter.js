// 함수의 값 전달 인자 
// parameter, argument, 매개변수 
console.clear();
function add(a, b) {
    return a + b;
}
function add2(...numbers) { // Spread operator(전개 구문)
    return numbers;
}
function add3(a, b, ...datas) {
    console.log(a);
    console.log(b);
    console.log(datas);    
}

// 함수 호출
let sum = add(400, 395938473);
let sum2 = add2(400);
console.log(`sum = ${sum}`);
console.log(`${sum2}`);
add3(1,5,6,7);


