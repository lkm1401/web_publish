// 학생(Student) 클래스
// 속성 : #이름, #나이, #주소, 별칭
// 메소드 : setter/getter 메소드 정의
class Student {
    #name;
    #age;
    #address;
    constructor(name, age, address, nickName) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.nickName = nickName;
    }

    // getName = () => this.#name; 
    // getAge = () => this.#age; 
    // getAddress = () => this.#address; 
    // getNickname = () => this.nickName; 

    // setName = (name) => this.#name = name;
    // setAge = (age) => this.#age = age;
    // setAddress = (address) => this.#address = address;
    // setNickname = (nickName) => this.nickName = nickName;

    //!!set/get 함수 형식은 private 정의된 필드값에 한해서 생성한다.
    get name() { return this.#name; };
    get age() { return this.#age; }
    get address() { return this.#address; }
    // get nickName() { return this.nickName; }
 
    set name(name) { this.#name = name; }
    set age(age) { this.#age = age; }
    set address(address) { this.#address = address; }
    // set nickName(nickName) {this.nickName = nickName; }
}

const hong = new Student("홍길동", 20, "서울시 강남구", "홍홍");
// console.log(`${hong.getName()}\n${hong.getAge()}\n${hong.getAddress()}\n${hong.getNickname()}`);
console.log(`${hong.name}\n${hong.age}\n${hong.address}\n${hong.nickName}`);
hong.name = "홍길순";
console.log(`${hong.name}\n${hong.age}\n${hong.address}\n${hong.nickName}`);

