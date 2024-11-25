/*
    scope(스코프) : 메모리 관리, 이름의 충돌 방지, 블록단위의 개념 구분
    block(블록 : {}) : 
    {
        블록단위의 실행 개념 : for, switch~case, if~else.. 
    }
*/

{
    // 전역변수, Global Variable
    // 파일전체 어느곳에서든지 호출이 가능
    // 변수의 초기화는 자동
    let a = 10; 
    const b = 20;
    console.log(a);
    console.log(b);
        
        {
            //지역변수, Local Variable
            //선언된 블럭안에서만 호출 가능
            //반드시 초기화를 진행
            let aa = 100; 
            const bb = 200
            console.log(a, b);
        }
    // console.log(aa);

    // 1~5 출력
    for(let i=1; i<6; i++) { //i 로컬변수
        console.log(i);        
    }
    for(let i=1; i<6; i++) { //i 로컬변수
        console.log(i);        
    }
    
}