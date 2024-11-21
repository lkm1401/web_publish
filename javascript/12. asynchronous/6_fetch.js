// API의 promise 리턴값 확인 후 호출
const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1387ed83604df30a0c5d9dfdea0cba00&targetDt=20120101`;
fetch(url)  //resolve(result), reject(error)
    .then((result) => { console.log(`result ==> ${result}`) })
    .catch((error) => { console.log(`error ==> ${error}`)});