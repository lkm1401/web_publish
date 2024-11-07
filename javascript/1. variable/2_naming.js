// 한줄 주석
/* 여러줄 주석 */

/**
 *  변수명 선언 규칙
 *  - 라틴어 (0~9, a~z, A~Z)
 *  - 특수문자 ($, _ 사용가능)
 *  - camel case : ex) camelCase
 *  - snake case : ex) snake_case
 * 
 *  주의사항
 *  - 숫자로 시작하면 x
 *  - 예약어(키워드) 사용 x
 *  - 특수문자 ($, _) 사용 가능
 *  - 이모지 사용불가
 */

//camelCase
let myName = "홍길동";
let myAge = 30;
console.log(myName);
console.log(myAge);

//snake_case
let audio_name = "삼성";
let audio_color = "Red";
console.log(audio_name);
console.log(audio_color);

// 저의 이름은 홍길동이고, 나이는 30입니다.
let output = "저의 이름은 " + myName + "이고, 나이는 " + myAge + "입니다.";
console.log(output);

// 템플릿 리터럴 :: 저의 이름은 홍길동이고, 나이는 30입니다.
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}입니다.`;
console.log(output2);

// 상수 선언  :: 변수, 상수는 프로그램의 상단에 위치
// 상수 선언시 모두 대문자, SNAKE_CASE로 선언하면 Good!!
const AUDIO_DEVICE_START = 1;
const AUDIO_DEVICE_CONTI = 2;
const AUDIO_DEVICE_FINISH = 0;




