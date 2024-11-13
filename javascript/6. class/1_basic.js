// 객체를 생성하기 위한 틀 ==> class(클래스)
/*
    class 클래스명 {
        // constructor(생성자) 함수
        constructor() {
            //filed
            this.필드명 = 값;
            ...
        }

        // 메소드
    }
 */
class Animal {
    // 생성자 함수
    constructor(emoji, color) {
        this.emoji = emoji;
        this.color = color;
    }

    // 메소드
    display = () => console.log(this.emoji);    
}

const dog = new Animal('🐶', 'brown');
dog.display();
