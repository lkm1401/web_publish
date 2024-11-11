// 종료되는 시점을 알고 있을 때까지 반복
/*
    while(조건식) {
        실행문;
    }
*/ 
// for문 : 1~ 5 까지 출력
// 3이면 종료
for(let i = 1 ; i <=5 ; i++) {
    if(i === 3) break;
    console.log(`i = ${i}`);   
}

// while문 : 1~5 까지 출력
// 3이면 종료
let count = 1;
while(count <=5) {
    if(count === 3) break;
    console.log(`count = ${count}`);
    count++;    
}

// 메뉴 선택
let flag = true; 
let menu = 0;
while(flag) {
    console.log(`1: 🍕 \t 2: 🌭 \t  0: 종료` );
    if(menu === 1) {
        console.log(`선택하신 메뉴는 🍕 입니다.`); 
        flag = false;      
    } else if(menu === 2) {
        console.log(`선택하신 메뉴는 🌭 입니다.`);
         flag = false;
    } else if(menu === 0) {
        console.log(`선택을 종료합니다`);
        flag = false;
    }
}