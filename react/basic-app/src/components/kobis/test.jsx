import BoxOffice from './BoxOffice.jsx';
import { useState, useEffect } from 'react';

export default function AppBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const key = `1387ed83604df30a0c5d9dfdea0cba00`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;

        const getDailyBoxOffice = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDailyBoxOffice(data.boxOfficeResult.dailyBoxOfficeList);
            } catch (error) {
                console.error("Error fetching daily box office:", error);
            }
        };
        getDailyBoxOffice();
    }, []);

    useEffect(() => {
        const getPosters = async () => {
            const fetchedPosters = [];
            for (const boxoffice of dailyBoxOffice) {
                const kmkey = '59H5F0U0OFQB3R2261VM';
                let kmurl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
                kmurl += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
                kmurl += `&title=${encodeURIComponent(boxoffice.movieNm)}`;
                kmurl += `&releaseDts=${boxoffice.openDt}`;
                kmurl += `&ServiceKey=${kmkey}`;

                try {
                    const response = await fetch(kmurl);
                    const data = await response.json();
                    const poster = data.Data[0]?.Result[0]?.posters?.split("|")[0];
                    if (poster) fetchedPosters.push(poster);
                } catch (error) {
                    console.error(`Error fetching poster for ${boxoffice.movieNm}:`, error);
                }
            }
            setPosters(fetchedPosters);
        };

        if (dailyBoxOffice.length > 0) {
            getPosters();
        }
    }, [dailyBoxOffice]);

    console.log(`Posters:`, posters);

    return (
        <>
            <h1>KOBIS BoxOffice</h1>
            <div className="title">
                <BoxOffice
                    rank="순위"
                    title="제목"
                    open="개봉일"
                    cnt="당일관객수"
                    total="누적관객수"
                    amt="누적매출액"
                    type="title"
                />
            </div>
            <div className="content">
                {dailyBoxOffice.map((boxoffice, index) => (
                    <div className="rank" key={boxoffice.rank}>
                        <BoxOffice
                            rank={boxoffice.rank}
                            title={boxoffice.movieNm}
                            open={boxoffice.openDt}
                            cnt={boxoffice.audiCnt}
                            total={boxoffice.audiAcc}
                            amt={boxoffice.salesAmt}
                            type="content"
                        />
                        {posters[index] && <img src={posters[index]} alt={`${boxoffice.movieNm} Poster`} />}
                    </div>
                ))}
            </div>
        </>
    );
}
