/**
 * Signup 에러 체크 함수
 */
export const errorCheckSignup = (name, value, errors, setErrors) => {
    const names = [
        { 'name': 'id', 'msg': '아이디를 입력해주세요'},
        { 'name': 'pwd', 'msg': '패스워드를 입력해주세요'},
        { 'name': 'cpwd', 'msg': '패스워드 확인을 입력해주세요'},
        { 'name': 'name', 'msg': '이름을 입력해주세요'},
        { 'name': 'phone', 'msg': '전화번호를 입력해주세요'},
        { 'name': 'emailName', 'msg': '이메일주소를 입력해주세요'}
    ];

    names.map(item => 
        (item.name === name) ? (
            (value === '') ? setErrors({...errors,[item.name]: item.msg})
                :  setErrors({...errors,[item.name]:''}) 
        ) : ''    
    );

}