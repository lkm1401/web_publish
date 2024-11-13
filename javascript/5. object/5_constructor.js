// 객체 생성자 함수 정의와 사용법 익히기
function Fruit(name, color, emoji) {
    //field
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    //method
    this.display = () => console.log(this.emoji); 
}

const apple = new Fruit("apple", "red", "🍎");
const orange = new Fruit("orange", "coral", "🍊");
console.log(apple);
console.log(orange);




// // apple : property - name, color : method - display()
// const apple = {
//     name: "apple",
//     color: "red",
//     display: function () { console.log("🍎"); }
// }
// // orange : property - name, color : method - display()
// const orange = {
//     name: "orange",
//     color: "coral",
//     display: function () { console.log("🍊"); }
// }
// // lemon : property - name, color : method - display()
// const lemon = {
//     name: "lemon",
//     color: "yellow",
//     display: function () { console.log("🍋"); }
// }

