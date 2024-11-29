import { kobisBoxOffice, searchMoviePoster } from "./kobisCommons.js";

/**************************************
 * 무비차트 리스트 생성 함수 호출
 **************************************/
createMovieChartList(1);


/**************************************
 * index -> 무비차트 리스트 생성 함수
 **************************************/
function createMovieChartList(page) {
    const date = new Date();
    const searchDt = date.getFullYear().toString()
                        .concat(date.getMonth()+1,date.getDate()-1);

    kobisBoxOffice('Daily', searchDt)
        .then((result) => {
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = [];  //Promise 객체타입 10개의 이미지 poster 저장

            rankList.forEach((element) => {
                posterList.push(getPoster(element.movieNm, element.openDt.replaceAll('-','')));
            });

            Promise.all(posterList)  //비동기식 처리를 묶어서 한번에 실행 및 관리
            .then((poster) => {
                let output = `<ul>`;
                (page === 2)? output += `<li><span class="movie-chart" id="arrow-left">&lt;&lt;</span></li>`
                                : output += '';   
                let idx = 0;
                (page !== 1) ? idx +=5 : idx =0 ;
                rankList.forEach((movie, i) => {
                    i += idx;                        
                    if(i < page * 5) {
                        output += `
                            <li>
                                <div>
                                    <img src="${poster[i]}" 
                                        alt="Movie-chart1"
                                        width="200px">
                                </div>
                                <div><h3>${rankList[i].movieNm}</h3></div>
                                <div><h5>${rankList[i].audiAcc}</h5></div>
                            </li>
                        `;
                    }
                });
                
                (page === 1)? output += `<li><span class="movie-chart" id="arrow-right">&gt;&gt;</span></li></ul>`
                                : output += '</ul>';                

                document.querySelector(".content-moviechart-list").innerHTML = output;

                // arrow-right :: click event
                const arrows = document.querySelectorAll(".movie-chart");
                arrows.forEach((arrow) => {
                    arrow.addEventListener('click', (event) => {
                        (event.target.id === 'arrow-right')? 
                            createMovieChartList(2) : createMovieChartList(1) ;                        
                    });
                });

            })
            .catch(error => console.log(error)); 

        })
        .catch();

}//createMovieChartList

/*********************************************  
 * kobisCommons.js 파일의 
 * searchMoviePoster 비동기식 함수를 순서대로 
 * 호출하는 getPoster 함수 생성 
 *********************************************/
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}
