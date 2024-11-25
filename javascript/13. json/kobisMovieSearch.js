import { kobisMovieList, kobisMovieDetail } from './kobisCommons.js';

let mlist = null;  //영화리스트 전역변수

initForm();

/** 영화리스트 100개 준비 */
function createMovieList() {
    kobisMovieList()
        .then((list) => {
            const tcount = list.movieListResult.totCnt;
            const length = list.movieListResult.movieList.length;
            const movieList = list.movieListResult.movieList;
            console.log(`tcount --> ${tcount}`);
            console.log(`length --> ${length}`);
            
            mlist = movieList;
            // for(let movie of mlist) {
            //     console.log(movie.movieNm);                
            // }
        })
        .catch((error) => console.log(error));
        
}


function initForm() {
    // KOBIS 영화 리스트 가져오기
    createMovieList();

    let output = `
        <h1>KOBIS 영화 검색</h1>
        <div>
            <input type="text" id="search_title" placeholder="제목을 입력해주세요">
            <button type="button" id="search_button">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector("body").innerHTML = output;

    //Search 버튼 이벤트 추가 및 유효성 체크
    document.querySelector("#search_button")
            .addEventListener('click', () => {
    
        let title = document.querySelector("#search_title");
        if(title.value.trim() === '') {
            alert('영화 제목을 입력해주세요');
            title.focus();
        } else {
            // 영화 리스트 출력 함수 호출
            searchMovieList(title.value.trim());
        }
            
    });
}//initForm()

/**
 * 영화 코드 검색 함수
 */
function searchMovieCd(title) {
    let movieCd = '';
    if(mlist !== null) {
        let filterMovie = mlist.filter((movie) => movie.movieNm === title);
        movieCd = filterMovie[0].movieCd;
    } 
    return movieCd;
}


/**
 * 영화 상세 검색 함수
 */
function searchMovieList(title) {
    let movieCd = searchMovieCd(title);
    console.log(`code ==>> ${movieCd}`);   

    kobisMovieDetail(movieCd)
        .then((result) => {
            let info = result.movieInfoResult.movieInfo;
            
            let output = `
                <ul>
                    <li>
                        <label>movieCd :: </label>
                        <span>${info.movieCd}</span>
                    </li>
                    <li>
                        <label>movieNm :: </label>
                        <span>${info.movieNm}</span>
                    </li>
                    <li>
                        <label>movieNmEn :: </label>
                        <span>${info.movieNmEn}</span>
                    </li>                    
                    <li>
                        <label>directors :: </label>
            `;

            info.directors.forEach((director) => {
                output += `<span>${director.peopleNm} |</span>`;
                output += `<span> ${director.peopleNmEn}</span>`;
            });

            output += ` <li>
                        <label>actors :: </label>
                        <ul>
                        `;

            info.actors.forEach((actor) => {
                output += `<li><span>${actor.peopleNm} | </span>`;
                output += `<span> ${actor.peopleNmEn} </span></li>`;
            });

            output += ` </ul>
                        </li>                    
                </ul>
            `;
            
            document.querySelector("#result").innerHTML = output;

        })
        .catch((error) => console.log(error)); 
    

}//searchMovieList