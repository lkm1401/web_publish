// counter 증가/감소
function counter(flag) {
    let number = document.querySelector("#number").textContent; 

    if(flag === 'increment') {
        document.querySelector("#number").textContent = ++number; 
    } else {
        if(number > 0) 
            document.querySelector("#number").textContent = --number; 
    }    
}

// counter 증가
function increment() {
    let number = document.querySelector("#number").textContent; 
    document.querySelector("#number").textContent = ++number; 
}

// counter 감소
function decrement() {
    let number = document.querySelector("#number").textContent; 
    if(number > 0) 
        document.querySelector("#number").textContent = --number; 
}