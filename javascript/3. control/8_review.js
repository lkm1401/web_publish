// 구구단 3단 ~ 5단까지 출력
/*
  3*1 = 3  4*1 = 4  5*1 = 5 
  3*2 = 6  4*2 = 8  5*2 = 10 
  ...
*/
// row : 1~9, col : 3~5
let start = 4;
let finish = 10;
for(let row=1; row<10; row++) {
    let output = '';
    for(let col=start; col<=finish; col++) {
        output += `${col} * ${row} = ${row*col}\t`;
    }
    console.log(output);   
}

/*
    *
    **
    ***
*/


/*
    🍏
    🍏🍏
    🍎🍎🍎
    🍏🍏🍏🍏
    🍏🍏🍏🍏🍏
*/ 
console.clear();

for(let row=1; row<=5; row++) {
    let output = '';
    for(let col=1; col<=row; col++) {
        if(row === 3) {
            output += `🍎 \t`;
        } else {
            output += `🍏 \t`;
        }   
    }
    console.log(output);    
}

