// fs 호출한 후 readme.txt, readme2.txt 파일을 순서대로 읽어서 출력
// readFile() 함수를 이용하는 경우는 동기식 처리이므로, 순서가 다를 수 있다.
// 비동기식 순서를 지켜야 하는 코드 ==> readFileSync()
const fs = require('fs');

let data = fs.readFileSync('./readme.txt');
console.log('readme.txt ==>> ', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('readme2.txt ==>> ', data.toString());