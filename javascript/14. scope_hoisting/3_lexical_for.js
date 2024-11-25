
// 1~5 출력
for(let i = 1; i<6 ; i++) {
    console.log(`i --> ${i}`);    
}

for(var i = 1; i<6 ; i++) {
    console.log(`i --> ${i}`);    
}

for(i = 1; i<6 ; i++) {
    console.log(`i --> ${i}`);    
}

/** for 루프의 인덱스값으로 var 키워드는 권장하지 않음 */
let a = [1, 2, 3];
for(var i=0; i<a.length; i++) {
    console.log(`a[${i}] --> ${a[i]}`);    
}
console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);

/** for...of */
for(let element of a) {
    console.log(element);    
}



