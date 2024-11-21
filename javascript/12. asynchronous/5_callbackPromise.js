// 비동기식 처리 함수를 순차적으로 호출해서 실행하고자 할때...
function step1(init) {
    let result = init + 1;
    // callback(result);
    return Promise.resolve(result);
}
function step2(init) {
    let result = init + 2;
    // callback(result);
    return Promise.resolve(result);
    // return Promise.reject('error');
}
function step3(init) {
    let result = init + 3;
    // callback(result);
    return Promise.resolve(result);
}

step1(0)
    .then((result1) => { 
        console.log(`result1 ==> ${result1}`);
        return step2(result1);
    })
    .then((result2) => {
        console.log(`result2 ==> ${result2}`);
        return step3(result2);
    })
    .then((result3) => {
        console.log(`result3 ==> ${result3}`);
    })
    .catch((error) => console.log(error));



