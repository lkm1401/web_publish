// iterable object의 요소를 순회하여 출력함
// 형식 : for(variable of iterable_object) { statement(실행문); }

// 배열의 요소를 교체하는 함수를 정의 : for...of
function replace(array, origin, target) {
    let resultArray = Array.from(array);
    
    resultArray.forEach((element, index)=>{
        if(element === origin) resultArray.splice(index, 1, target);
    });

    /*
    for(let i =0; i<resultArray.length; i++) {
        let element = resultArray[i];
        if( element === origin){
            resultArray.splice(i, 1, target);
        }
    }*/

    /* for...of
    let index = 0;
    for(element of resultArray) {
        if(element === origin) {
            resultArray.splice(index, 1, target);
        }
        index++;
    }*/
    return resultArray;
}

let fruits = ['🍊','🍎','🍓','🍎','🍋','🍎'];
let result = replace(fruits, '🍎', '🍏');
console.log(result);

let numbers = [1, 2, 3, 4, 2, 2, 5, 2];
let result2 = replace(numbers, 2, 7);
console.log(result2);

