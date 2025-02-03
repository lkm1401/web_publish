import React, { useRef } from 'react';


/*************************************
 * Signup 컴포넌트 초기화 작업
 *************************************/
export function initSignup() {
        const names = ['id','pwd','cpwd','name','phone','emailname'];
        const namesKor = ['아이디','비밀번호','비밀번호 확인','이름','휴대폰 번호','이메일 주소'];
        const placeholdersKor = ['아이디(6~12자이내)','비밀번호','비밀번호 확인','이름','휴대폰 번호( -  포함)','이메일 주소'];
    
    
        /** 배열.reduce(콜백함수, 리턴데이터 타입정의) */
        const placeholders = names.reduce((acc, name, idx) => {
            acc[name] = placeholdersKor[idx];   return acc;  // {id:"아이디(6~12자이내)", ... }
        }, {});
    
        const labels = names.reduce((acc, name, idx) => {
            acc[name] = namesKor[idx];   return acc;  // {id:"아이디", pwd:"아이디".. }
        }, {});
    
        const initFormData = names.reduce((acc, name) => {
            acc[name] = "";   return acc;
        }, {});

        return {names, placeholders, labels, initFormData};
}

/**
 * 
 */
export function useInitSignupRefs(names) {  // Customer Hook(커스터머 훅 )
    const refs = useRef(
        names.reduce((acc, name)=>{
            acc[name.concat('Ref')] = React.createRef();  //useRef(null) Hook 바로 호출 X
            return acc;
        }, {})
    );
    refs.current.emaildomainRef = useRef(React.createRef()); 
    // 반드시 useRef() 감싸줌=> 이벤트 호출 시 useXXX 객체들이 자동으로 업데이트 되므로 useRef() 제외시
    // 자동 업데이트가 되지 않음


    const msgRefs = useRef(
        names.reduce((acc, name)=>{
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        }, {})
    );

    return {refs, msgRefs};
}