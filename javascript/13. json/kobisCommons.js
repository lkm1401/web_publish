/**
 * KOBIS 박스오피스 정보 호출 함수
 */
export async function kobisBoxOffice(type, searchDt) {
    const key = `1387ed83604df30a0c5d9dfdea0cba00`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

    const kobis = await fetch(url);
    const jsonData = await kobis.json();

    return jsonData;
}