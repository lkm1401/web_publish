// 클래스에서 정의되는 메소드로, #(private)로 접근제어가 설정된 필드에
// 새로운 값을 입력하기 위한 메소드이다.
// setterXXX(입력되는 값), getterXXX()
class Employee {
    #empno;
    constructor(empno, ename, dept) {
        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }

    setEmpno = (empno) => this.#empno = empno;
    setEname = (ename) => this.ename = ename;
    setDept = (dept) => this.dept = dept;

    getEmpno = () => this.#empno; 
    getEname = () => this.ename; 
    getDept = () => this.dept; 

    info = () => console.log(`${this.ename}, ${this.dept}`);
    infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.dept}`);
}

const hong = new Employee('1234', '홍길동', '개발1팀');
hong.info();
hong.infoAll();
hong.setEmpno('12345');
hong.setEname('홍홍');
hong.setDept('개발2팀');
hong.infoAll();
console.log(hong.getEmpno());
console.log(hong.getEname());
console.log(hong.getDept());


