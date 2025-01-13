// writeme.txt 파일에 'Hello~nodejs~' 문자를 추가 한 후 
// 파일의 내용을 출력
const fs = require('fs');

fs.appendFileSync('./writeme.txt', 'Hello~ nodejs ~', 
                    (err) => console.log(err));

let data = fs.readFileSync('./writeme.txt');
console.log(data.toString());
