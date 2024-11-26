/**  KMDB API 호출 */
export async function kmdb(type, value, title) {
    const serviceKey = `59H5F0U0OFQB3R2261VM`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&${type}=${value}&title=${title}`;
    url += `&ServiceKey=${serviceKey}`;

    let api = await fetch(url);
    let jsonData = await api.json();
    
    return jsonData;
}