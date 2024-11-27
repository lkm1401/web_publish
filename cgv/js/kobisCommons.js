/**
 * KMDB 영화 상세 정보
 */
export async function kmdbMovieDetail(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData;
}


/**
 * KMDB 영화 포스터 검색
 */
export async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}


/**
 * KOBIS 영화 정보 상세 호출 함수
 */
export async function kobisMovieDetail(movieCd) {
    const key = `1387ed83604df30a0c5d9dfdea0cba00`;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    
    const movie = await fetch(url);
    const jsonData = await movie.json();

    return jsonData;
}

/**
 * KOBIS 영화 리스트 호출 함수
 */
export async function kobisMovieList() {
    const key = `1387ed83604df30a0c5d9dfdea0cba00`;
    const curPage = 1;
    const itemPerPage = 100;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;
    
    const movieList = await fetch(url);
    const jsonData = await movieList.json();

    return jsonData;
}


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