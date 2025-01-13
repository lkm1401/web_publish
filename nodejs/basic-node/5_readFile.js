//readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습
const fs = require('fs');
const fsp = require('fs').promises;

// console.log(fs);
// fs.readFile('파일의 경로', function (){});
fs.readFile('./readme.txt', (err, text) => {
    if(err) { 
        console.log('파일 읽기 실패!');
    } else {
        console.log(text);    
        console.log(text.toString());    
    }
});

//프로미스 타입으로 리턴
fsp.readFile('./readme.txt')
            .then((data)=>{
                console.log('fsp-->', data.toString());                
            })
            .catch((err)=>{
                console.log(err);                
            });

