import React from 'react';

export default function DetailInfo() {
    const info ={
        "title_en": "FRENCH ZIP-UP HOODIE",
        "title_ko": "프렌치 집업 후디",
        "list": [
                    {                
                            "title": "FABRIC",
                            "color": "Grey",
                            "material": "Cotton 100%",
                            "description": [
                                "원단의 컬러와 두께, 촉감은 모두 파사드패턴에서 기획되어 제작된 FACADE PATTERN 의 EXCLUSIVE 원단입니다.",
                                "실켓 가공하여 일반적인 스웻 셔츠보다 표면이 깨끗하고 은은한 광택이 납니다.",
                                "탄탄하게 편직 된 프렌치 테리 원단입니다.",
                                "원단 수축을 최소화 하기 위해 덤블워싱과 텐타가공이 되었습니다.",
                                "22년도 제품에서 보풀이 적고, 여름을 제외한 계절에 입기 좋게 좀 더 얇은 두께감으로 원단을 리뉴얼 했습니다."
                            ]
                    },
                    {
                            "title": "DETAIL",
                            "description": [
                                "풀오버 집업과 앞 포켓이 있어 캐주얼하고 편안한 후디 자켓입니다.",
                                "옆 라인에 립 원단으로 사이드 패널을 넣어 움직임이 편안합니다.",
                                "탄탄한 원단으로 실루엣이 잘 유지되고 멋스럽습니다.",
                                "단품으로 입기에도 부담이 없는 실용적인 아이템입니다",
                                "클래식한 재킷이나 맥코트 이너로 매치하면 자연스럽고 무심한 스타일링을 연출할 수 있습니다.",
                                "와이드 프렌치 스웻 팬츠와 SET-UP으로 착용 가능합니다."
                            ]
                    },
                    {
                            "title": "MAKING",
                            "description": [
                                "지퍼와 후디 스트링은 아이보리 배색으로 포인트를 주었습니다.",
                                "촘촘한 땀수로 봉제되어 옷매무새가 단정하고 깨끗합니다."
                            ]
                    },
                    {
                            "title": "SIZE",
                            "type": "SMALL / MEDIUM",
                            "totalLength": "51cm / 52cm",
                            "shoulderWidth": "48.5cm / 50cm",
                            "chestWidth": "59cm / 61cm",
                            "sleeveLength": "61cm / 62cm",
                            "sleeveHemWidth": "9.5cm / 10cm",
                            "hemLength": "47cm / 49cm",
                            "armhole": "26cm / 26.5cm"
                    },
                    {
                            "title": "MODEL SIZE",
                            "height": "Height 175cm",
                            "size": "MEDIUM size 착용" 
                    },
                    {
                            "title": "CARE INSTRUCTION",
                            "description": [
                                "전문가에게 드라이 클리닝 맡기는 것을 권장합니다.",
                                "30도의 낮은온도로 세탁망에 넣어 세탁도 가능합니다.",
                                "표백제 사용을 피해주세요.",
                                "건조기 사용을 피해주세요.",
                                "낮은 온도에 천을 덧대어 다림질 해주세요.",
                            ]
                    }
        ]
    }

    return (
        <div className="detail-info">
            <h4 className="detail-info-title-top">{info.title_en} / {info.title_ko}</h4>
            {
                info && info.list.map(item => (
                    <div>
                        <h5 className="detail-info-title">[{item.title}]</h5>
                        {
                            item.title === "SIZE" || item.title === "MODEL SIZE" ? (
                                <ul className="nolist">
                                    <li>{item.type}</li>
                                    {   item.title === "MODEL SIZE" &&
                                        <>
                                        <li>{item.height}</li>
                                        <li>{item.size}</li>
                                        </>
                                    }
                                    {   item.title === "SIZE" &&
                                        <>
                                        <li>총길이 : {item.totalLength}</li>
                                        <li>어깨너비 : {item.shoulderWidth}</li>
                                        <li>가슴너비 : {item.chestWidth}</li>
                                        <li>소매길이 : {item.sleeveLength}</li>
                                        <li>소매밑단 : {item.sleeveHemWidth}</li>
                                        <li>밑단너비 : {item.hemLength}</li>
                                        <li>암홀 : {item.armhole}</li>
                                        </>
                                    }
                                </ul>
                            ) : (
                                <ul className="list nolist">
                                    {
                                        item.title === "FABRIC" &&
                                        <>
                                            <li>Color : {item.color}</li>
                                            <li>{item.material}</li>
                                        </>
                                    }
                                    { item.description && item.description.map(description => (
                                        <li>{description}</li>
                                    ))}
                                </ul>
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}

