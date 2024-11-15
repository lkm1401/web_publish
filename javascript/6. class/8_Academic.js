// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member 부모클래스 (name, age, address)
class Member {
    #name;
    #age;
    #address;
    constructor(name, age, address) { // 자식의 클래스 생성자함수에서 super 호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name() { return this.#name; }
    get age() { return this.#age; }
    get address() { return this.#address; }
}

/** Student class */
class Student extends Member {
    #sno;  //학번
    constructor(sno, name, age, address) {
        super(name, age, address);
        this.#sno = sno;
    }
    get sno() { return this.#sno; }
    //전체 값을 반환하는 함수 정의
    //객체명.values()
    // values = () => [this.name, this.age, this.address, this.#sno];

    //객체명.values
    get values() {
        return [this.name, this.age, this.address, this.#sno];
    }
}

/** Professor class */
class Professor extends Member {
    #subject;   //강의과목
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() { return this.#subject; }
    get values() {
        return [this.name, this.age, this.address, this.#subject];
    }
}

/** Parent class */
class Parent extends Member {
    #cname;  //자녀명
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.#cname = cname;
    }
    get cname() { return this.#cname; }
    get values() {
        return [this.name, this.age, this.address, this.#cname];
    }
}

/** Employee class */
class Employee extends Member {
    #department;  //소속부서
    constructor(name, age, address, department) {
        super(name, age, address);
        this.#department = department;
    }
    get department() { return this.#department; }
    get values() {
        return [this.name, this.age, this.address, this.#department];
    }
}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
    let type = document.querySelector("input[type=radio]:checked");
    let name, age, address, sno, subject, cname, department;   
    let member = null;  // type에 따라서 각각의 클래스 생성
    
    switch(type.value) {
        case '1':  
            name = document.querySelector("#student #name");    
            age = document.querySelector("#student #age");    
            address = document.querySelector("#student #address");    
            sno = document.querySelector("#student #sno"); 

            member = new Student(sno.value, 
                                name.value, 
                                age.value, 
                                address.value);  
            break;
        case '2': 
            name = document.querySelector("#professor #name"); 
            age = document.querySelector("#professor #age"); 
            address = document.querySelector("#professor #address"); 
            subject = document.querySelector("#professor #subject");
            
            member = new Professor(name.value, 
                                age.value, 
                                address.value, 
                                subject.value); 
            break;
        case '3': 
            name = document.querySelector("#parent #name");
            age = document.querySelector("#parent #age");
            address = document.querySelector("#parent #address");
            cname = document.querySelector("#parent #cname");

            member = new Parent(name.value, 
                                age.value, 
                                address.value, 
                                cname.value); 
            break;
        case '4':  
            name = document.querySelector("#employee #name");
            age = document.querySelector("#employee #age");
            address = document.querySelector("#employee #address");
            department = document.querySelector("#employee #department");

            member = new Employee(name.value, 
                                age.value, 
                                address.value, 
                                department.value); 
            break;
    }

    console.log(member);
  
    //자바스크립트로 생성되는 HTML를 Dynamic HTML(DHTML)
    
    // let list = Object.keys(member);  // ['name','age','address','sno']
    // --> class의 필드값이 private인 경우에만 데이터를 가져올 수 없음!!!

    let list = '';
    member.values.forEach((item) => {
        list += `<li>${item}</li>`;
    });

    let output = `<ul>${list}</ul>`;
    
    document.querySelector("#result").innerHTML = output;

}//end of signupCheck 


// display : 라디오버튼 선택시 화면을 전환시키는 함수
const display = (type) => {
    document.querySelector("#result").innerHTML = '';

    document.querySelector('#student').style.display = "none";
    document.querySelector('#professor').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";

    if(type === '1') {
        document.querySelector('#student').style.display = "block";
    } else if(type === '2') {
        document.querySelector('#professor').style.display = "block";
    } else if(type === '3') {
        document.querySelector('#parent').style.display = "block";
    } else if(type === '4') {
        document.querySelector('#employee').style.display = "block";
    }//if
}//end of display



/*
const hong = new Student('1234', '홍길동', 20, '서울시 강남구'); //학생
const smith = new Professor('smith', 40, '서울시 서초구', 'JavaScript'); //교수
const hongP = new Parent('홍길순', 60, '서울시 강남구', '홍길동');
const lee = new Employee('이철수', 30, '부산시 해운대구', '개발1팀');

console.log(`*** 학생 정보 ***`);
console.log(`${hong.sno}\n${hong.name}\n${hong.age}\n${hong.address}`);

console.log(`*** 교수 정보 ***`);
console.log(`${smith.name}\n${smith.age}\n${smith.address}\n${smith.subject}`);

console.log(`*** 학부모 정보 ***`);
console.log(`${hongP.name}\n${hongP.age}\n${hongP.address}\n${hongP.cname}`);

console.log(`*** 직원 정보 ***`);
console.log(`${lee.name}\n${lee.age}\n${lee.address}\n${lee.department}`);
*/