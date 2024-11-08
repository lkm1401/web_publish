// 중첩 for문 : 이차원 형태의 저장소 데이터 출력
/*
    1(1,1) 2(1,2) 3(1,3)
    4(2,1) 5(2,2) 6(2,3)
    
    for() { //행
        for() { //열
        }
    }  
*/ 
let count = 1;
for(let i=1; i<6 ; i++) {
    let rows = '';
    for(let j=1; j<4 ; j++) {
        rows += `${count++}\t`;     
    }
    console.log(rows);
}                       



