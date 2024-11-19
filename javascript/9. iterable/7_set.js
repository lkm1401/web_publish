// Set 클래스
// 다양한 데이터(원시데이터(primitive), 객체참조) 저장

// 데이터 추가 : add(value)
let mySet = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add({age: 20});
mySet.add([1, 2, 3]);
console.log(mySet);

// 데이터 순회 
for(let value of mySet) {
    console.log(`value => ${value}`);
}

mySet.forEach((value) => {
    console.log(value);    
});

// 데이터 확인
console.log(mySet.has(10));
console.log(mySet.has(100));
console.log(mySet.has({age: 20}));

// 데이터 삭제
if(mySet.has(10)) {
    mySet.delete(10);
    console.log('삭제완료!');    
}
else console.log('데이터가 존재하지 않음');

console.log(mySet);

// 전체 삭제
mySet.clear();
console.log(mySet);





