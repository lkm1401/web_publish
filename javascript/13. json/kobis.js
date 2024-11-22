import { kobisBoxOffice as boxOffice } from './kobisCommons.js';

initForm();

function initForm() {
    const output = `
        <h1>KOBIS 박스 오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="예) 20241122">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector("body").innerHTML = output;

    // 기본 박스오피스 화면 출력 : 20240101
    searchBoxOffice('Daily','20240101');


    /** Search 버튼 이벤트 추가 */
    let searchButton = document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=>{
        //searchDt 입력창, 박스오피스 타입의 유효성 체크
        let type = document.querySelector("#type");
        let searchDt = document.querySelector('#searchDt');
        
        if(type.value === 'default') {
            alert('박스오피스 타입을 선택해주세요');
            type.focus();
        } else if(searchDt.value === '') {
            alert('검색일자를 입력해주세요');
            searchDt.focus();
        } else {
            // 일별&주간/주말 박스오피스 정보 화면 출력
            searchBoxOffice(type.value, searchDt.value);
        }

    });

}//end of initForm


/**
 * 일별 박스오피스 정보 화면 출력
 */
function searchBoxOffice(ktype, searchDt) {
    boxOffice(ktype, searchDt) // Promise 객체로 리턴
        .then((result) => {
            // const rankType = ktype.toLowerCase();
            const type = result.boxOfficeResult.boxofficeType;
            const range = result.boxOfficeResult.showRange;

            //ktype을 체크하여 Daily, Weekly
            let rankList = null;
            if(ktype === 'Daily'){
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
            } else if(ktype === 'Weekly'){
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;
            }

            let output = `            
                <h5>박스오피스 타입 : ${type}</h5>
                <h5>박스오피스 일자 : ${range}</h5>
                <table border=1>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일관객수</th>
                        <th>누적관객수</th>
                    </tr>`;
            
            rankList.forEach((element) => {
                output += `
                    <tr>
                        <td>${element.rank}</td>
                        <td>${element.movieNm}</td>
                        <td>${element.openDt}</td>
                        <td>${element.audiCnt}</td>
                        <td>${element.audiAcc}</td>
                    </tr>
                `;
            });  
                            
            output += `</table>`;
            
            // 테이블 화면 출력            
            document.querySelector("#result").innerHTML = output;
        })
        .catch();

}
