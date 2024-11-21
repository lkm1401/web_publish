function a() {
    c(); // return address(복귀 주소)
    console.log(`-----> a function!!`);    
}
function b() {
    setTimeout(()=>{ console.log(`1초후 setTimeout 함수 실행!!`)}, 1000);
    console.log(`-----> b function!!`);    
}
function c() {
    b(); 
    console.log(`-----> c function!!`);    
}

a();
