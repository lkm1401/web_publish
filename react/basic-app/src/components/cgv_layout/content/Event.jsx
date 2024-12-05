import EventItem from "./EventItem";

export default function Event() {
    const list = [
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42386/17297657794310.jpg",
            "title": "[CGV]10월 컬처위크",
            "date": "2024.10.24~2024.10.31",
        },
        {
            "src": "/images/event1.jpg",
            "title": "[콜렉터블 무비머니]Vol.1 맥스 달튼",
            "date": "2024.09.25~2024.10.31",
        },
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42888/17332152020130.jpg",
            "title": "[모아나2] 스페셜 포스터",
            "date": "2024.12.05~2024.12.31",
        },
    ];

    return (
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">EVENT</h3>
                    <button className="total-view-button">전체보기 &gt;</button>
                </div>
                <ul className="content-event-list">
                    {list.map(item => 
                        <li>
                            <EventItem 
                                src={item.src}
                                title={item.title}
                                date={item.date}
                                />
                        </li>
                    )}
                </ul>
        </section> 
    );
}