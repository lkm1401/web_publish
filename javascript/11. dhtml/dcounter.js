// 자바스크립 호출 시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
// window.onload(), document.ready(), DOMContentLoaded()
window.addEventListener('DOMContentLoaded', function() {
    initForm();
});

// counter 폼 생성 함수
function initForm() {
    let output = `
        <h1>DHTML - Counter</h1>
        <div class="counter_container">
        <div id="number">0</div>
        <button type="button" class="button" data-operation="increment">increment</button>
        <button type="button" class="button" data-operation="decrement">decrement</button>
    </div>
    `;
    
    // counter 폼 출력
    document.querySelector("#content").innerHTML = output;

    // button 이벤트 처리
    let buttons = document.querySelectorAll(".button");
    // console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let flag = button.dataset.operation;
            let number = document.querySelector("#number").textContent; 

            if(flag === 'increment') {
                document.querySelector("#number").textContent = ++number; 
            } else {
                if(number > 0) 
                    document.querySelector("#number").textContent = --number; 
            }          
        });
    });    
}

