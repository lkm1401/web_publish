// 객체에서 기능을 실행하는 메소드
const apple = {
    name: "사과",
    color: "Red",
    emoji: "🍎",
    display : function () { console.log("🍎"); },  // 메소드
    getName: function () { console.log(this.name); },
    getColor: function () { console.log(this.color); },
    getEmoji: function () { console.log(this.emoji); }
}
console.log(apple);
apple.getName();
apple.getColor();
apple.getEmoji();
