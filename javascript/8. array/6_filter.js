// filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter((item) => item.length> 6));   // []
// 콜백함수에  {}을 추가하면 반드시 return 키워드를 붙여서 값을 반환!!!!!!
// console.log(words.filter((item) => { return item.length> 6 }));   // []

let numbers = [1, 2, 3, 4, 5, 6, 7];
// 5이상 숫자 출력
let array = [];
numbers.forEach((x) => {
    if(x >= 5) array.push(x);
} );
console.log(array);

// let array2 = numbers.filter((x) => { return x >= 5 });   // []
let array2 = numbers.filter((x) =>  x >= 5 );   // []
console.log(array2);


let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6, 7];
//3보다 크거나 같은 값을 출력
console.log(numbers2.filter((x) => x>=3)); 

//numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값을 출력
console.log(numbers2.map((x)=> Math.round(x)).filter((x)=> x>=3));
console.log(numbers2.map(Math.round).filter((x)=> x>=3));


//아이템을 검색하여 갯수를 리턴
function searchItem(array, sItem) {
    // array.filter((item) => { return item === sItem});
    return array.filter((item) => item === sItem).length;    
}

function searchItem2(array, sItem) {
    let count = 0;
    array.forEach((item) => {
        if(item === sItem) count++;
    });
    return count;
}


let fList = ['🍋','🍓','🍎','🍊', '🍋'];  
let nList = [1, 2, 4, 5, 7, 4, 6, 45, 33, 90, 4, 4]; 

console.log(`count ==> ${searchItem(fList, '🍋')}`);  
console.log(`count => ${searchItem(nList, 4)}`);  













