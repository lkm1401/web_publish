const path = require('path');
const string = __filename;  // 현재 실행 중인 파일의 경로

console.log(path.sep);
console.log(string);  // 현재 실행 중인 파일 경로 출력
console.log(path.dirname(string));
console.log(path.extname(string));  // 현재 실행 중인 파일의 확장자
console.log(path.basename(string)); // 현재 실행 중인 파일명(파일명+확장자)
console.log(path.basename(string, path.extname(string))); // 현재실행 중인 파일명
console.log(path.dirname(string),path.join('/images')); // images 경로 추가


