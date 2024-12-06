/**
 * 내용 : 비동기식 네트워크 연동 실행 함수
 * @param {*} url 
 * @returns 
 */
export async function fetchJSON(url) {
    const data = await fetch(url);
    const jsonData = await data.json();

    return jsonData;
}
