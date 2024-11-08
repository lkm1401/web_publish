// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요.
let number = 395839583950;
let result = undefined;
// 1:true, 0:false
if(number % 2)   result = '🍏';
else result = '🍎';
console.log(result);

// 삼항연산자 : () ? : ;
let choice = undefined;
(!(number % 2))?  choice = '🍎' : choice = '🍏';
console.log(choice);

// 삼항연산자
let emoji = (!(number % 2))?  '🍎' : '🍏';
console.log(emoji);

