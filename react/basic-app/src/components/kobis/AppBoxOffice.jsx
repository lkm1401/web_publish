import BoxOffice from './BoxOffice.jsx';
import { useState, useEffect } from 'react';

export default function AppBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);

    useEffect(()=>{
        const key = `1387ed83604df30a0c5d9dfdea0cba00`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;
    

        fetch(url)
            .then(data => data.json())
            .then(daily => setDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log(error));

    }, []);

    return (
        <>
            <h1>KOBIS BoxOffice</h1>
            <div className="title">
                <BoxOffice 
                    rank = "순위"
                    title = "제목"
                    open = "개봉일"
                    cnt = "당일관객수"
                    total = "누적관객수"
                    amt = "누적매출액"
                    type = "title"
                />
            </div>
            <div className="content">
                {dailyBoxOffice.map(boxoffice => 
                <div className="rank">
                    <BoxOffice 
                        rank = {boxoffice.rank}
                        title = {boxoffice.movieNm}
                        open = {boxoffice.openDt}
                        cnt = {boxoffice.audiCnt}
                        total = {boxoffice.audiAcc}
                        amt = {boxoffice.salesAmt}
                        type = "content"
                    />
                </div>
                )}
            </div>
        </>
    );
}