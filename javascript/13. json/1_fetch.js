// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// KOBIS - 일별 박스오피스
let key = `1387ed83604df30a0c5d9dfdea0cba00`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// 1. Response 객체 
fetch(url)
    .then((response) => { console.log(response)})
    .catch((error) => { console.log(error)});

// 2. JSON 데이터 가져오기
let result = await fetch(url);  // JSON객체가 문자열 데이터타입으로 가져옴
let jsonData = await result.json(); // .json()함수를 통해 JSON 객체 타입 변환
console.log(`type => ${jsonData.boxOfficeResult.boxofficeType} `);
console.log(`range => ${jsonData.boxOfficeResult.showRange} `);
console.log(`rankList => 
        ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank} `);
console.log(`rankList => 
        ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm} `);








    