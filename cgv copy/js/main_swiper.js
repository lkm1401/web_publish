import { kobisBoxOffice, searchMoviePoster } from './kobisCommons.js';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.min.js';

window.addEventListener('DOMContentLoaded', () => {
    initSwiper(); 
});

/** 순차적으로 비동기식 호출을 위해 getPoster 함수 생성  */
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}//getPoster

function initSwiper() {
    const date = new Date();
    let searchDt = date.getFullYear().toString().concat(date.getMonth()+1,date.getDate()-1);
    
    kobisBoxOffice('Daily',searchDt)
        .then((result)=>{
            console.log(result);
            
            let rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = [];

            rankList.forEach((element) => {  //영화 포스터 가져오기 - KMDB
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-','');

                posterList.push(getPoster(movieNm, openDt));                
            });

            Promise.all(posterList)  //비동기식 처리는 모두 종료가 되도록 실행
            .then((poster) => {
                console.log(poster[0]);
                
                const swiperHTML = `
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="${poster[0]}" alt="Slide 1"></div>
                            <div class="swiper-slide"><img src="${poster[1]}" alt="Slide 2"></div>
                            <div class="swiper-slide"><img src="${poster[2]}" alt="Slide 3"></div>
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                `;

                // 대상 컨테이너에 추가
                const container = document.querySelector("#swiper-wrapper");
                container.innerHTML = swiperHTML;


                /****************** */
                // Swiper 초기화
                const swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });



                /****************** */





            })
            .catch(error => console.log(error));


        })
        .catch(error => console.log(error));
}