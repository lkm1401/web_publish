// key, value를 한쌍으로 가지는 클래스
// set(key, value) : 데이터 추가
// get(key) : 데이터 출력
// has(key) : 데이터 존재 여부 확인 true, false
// delete(key) : 데이터 삭제
// Map은 iterable object 이므로 for...of, spread, destructure 가능함

let fruitMap = new Map();

fruitMap.set('apple', '🍎');
fruitMap.set('apple', '🍎'); //apple은 하나만 저장됨!!
fruitMap.set('orange', '🍊');
console.log(fruitMap);

console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

console.log(fruitMap.has('orange'));
console.log(fruitMap.has('lemon'));

if(fruitMap.has('orange')) 
    fruitMap.delete('orange');

console.log(fruitMap);


