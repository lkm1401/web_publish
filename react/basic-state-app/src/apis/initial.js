/**
 * Form 초기화 이름 생성 함수
 */
export const initFormNames = (initArray) => {
    const init = initArray.reduce((acc, key)=>{
        acc[key] = '';
        return acc;
    }, {});

    return init;
}
