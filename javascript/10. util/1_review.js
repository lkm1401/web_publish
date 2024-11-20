// Iterable Object - 순회가 가능한 객체들을 말함, String, Array, Map, Set...
// for...of, ...:Spread Operator(전개 구문), Destructring Object(구조 분해 할당)
// Map: (key,value) - set, get, has, keys, values, entries, clear...
// Set: (value) - add, get, has, delete, keys, values, clear ...

//1. Spread Operator
function display(...params) {
    for(number of params) console.log(number);    
}
display(1, 2);
display(1, 2, 3, 4);

const hong = {
    name: "홍길동",
    age: 20
};

const hongUpdate = {
    ...hong,
    address: "서울시 강남구"
};
console.log(hongUpdate);

// 2. Destructuring Object(구조 분해 할당)
const getObject = () => {
    return {name: "공유", age: 30};
}
const { name, age }  = getObject();
console.log(name, age);

const getObject2 = () => {
    return [ 1, 2, 3];
}
const [n1, n2, n3] = getObject2();
console.log(n1, n2, n3);

// 3. 인스턴스객체.forEach(콜백함수);
const numbers = [1, 2, 3];
numbers.forEach((element, i) => console.log(i, element));

const myMap = new Map();
myMap.set('name','홍길동');
myMap.set('age', 20);
myMap.forEach((value, key) => console.log(key, value));

const mySet = new Set();
mySet.add("홍길동");
mySet.add("홍길동");
mySet.add("서현진");
console.log(mySet);
mySet.forEach((value, key) => console.log(key, value));
