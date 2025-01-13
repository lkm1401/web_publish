// 파일 관련 작업은 비동기식 처리 이므로
// 하나의 파일을 읽고, 쓰는 작업만 진행한다면 readFile(), writeFile()
// 여러개의 파일을 순서대로 읽고, 쓰는 작업을 한다면 readFileSync(), writeFileSync()
const fs = require('fs');

console.log(fs);
// fs.writeFile('파일경로', 데이터, 콜백함수);
fs.writeFileSync('./writeme3.txt', '새로운 글이 작성됩니다.'
                , (err) => console.log('에러 발생!!!'));

const data = fs.readFileSync('./writeme3.txt');
console.log(data.toString());

                