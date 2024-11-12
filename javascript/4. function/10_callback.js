// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
const job = (a, callback) => {
    callback(a);
}
const job2 = (a, b, callback) => {
    callback(a, b);
}
const print = (a) => console.log(a);
const printSum = (a, b) => {
    console.log(a+b);
}
job(100, print);
job2(100,200, printSum);

// setTimeout 함수 호출
console.clear();
setTimeout((second) => console.log(`${second}초 후 실행!!`), 3000, 3);


