// 제어문 - 반복문 : for, while
// for : 정확한 반복 횟수를 알고 있을때 <--> Array
// for((1)초기값(선언문) ; (2)조건식 ; (4)증감식) {
//    (3)실행문;
// } 
// 1. 초기값을 선언한다. --> 초기값 변수는 for 블록에서만 실행
// 2. 선언한 변수는 조건식을 통해 비교한다. --> boolean 타입의 결과 
// 3. (2)번의 결과가 true이면 실행문을 실행한다.
// 4. 실행문이 종료되면, 증감식을 실행한다.
// (2) ~ (4)번까지 반복해서 작업을 실행한다.
// 5. 조건식이 false가 되면 for 루프 블록을 빠져나온다. 

// 숫자 1부터 100까지 반복해서 출력해주세요.
for(let i=1 ; i <= 100 ; i++){
    console.log(i);    
}

// 숫자 배열을 출력해주세요.
let numberList = ['🍕', '🍔', '🍟'];
// 배열의 마지막 인덱스주소는 배열크기보다 하나작다!!!
// 배열의 크기 구하는 형식 : 배열객체.length
console.log(`numberList.lenght = ${numberList.length}`);
for(let i=0 ; i <= numberList.length-1 ; i++){  
    console.log(numberList[i]);    
}


// 과일리스트 출력
let fruitList = ['apple', 'orange', 'lemon'];
let emojiList = ['🍎','🍊','🍋'];

let length = fruitList.length-1;

for(let k=0; k <= length ; k++) {
    let fruit = fruitList[k];
    let emoji = emojiList[k];
    if(fruit === 'lemon') {
        console.log(emoji);   
    }
}











// while : 종료하는 시점을 정확하게 알고 있을때 <--> true, false 값을 통해 체크
