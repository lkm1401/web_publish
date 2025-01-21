import React from 'react';

export default function DetailInfoNotice() {
    const infoNotice = {
        "names": [
            '소재',
            '색상',
            '치수',
            '제조자(수입자)',
            '제조국(수입국)',
            '세탁방법 및 취급시 주의사항',
            '제조년월',
            '품질보증기준',
            'A/S 책임자와 전화번호',
            '청약철회제한사유',
            '환불지연 배상',
            '소비자 피해 보상 기준',
            '교환반품 및 품질보증 기준',
            '판매자 귀책에 따른 반품기준'
        ],
        "values": [
            'Cotton 100%',
            '상세페이지참조',
            'SMALL, MEDIUM',
            '(주)파사드패턴',
            'KOREA',
            '상품 품질표시 및 상품상세정보 참고',
            '2023-08-01',
            '전자상거래법 준수',
            '(주)파사드패턴 / 02-1668-1594',
            '전자상거래 등에서의 소비자보호에 관한 법률의 청약철회 제한 사유에 해당하는 경우 및 기타 객관적으로 이에 준하는 경우',
            '상세페이지 참조',
            '소비자분쟁해결기준(공정거래위원회 고시)에 따름',
            '관련법 및 소비자분쟁해결 규정에 따름',
            '전자상거래 등에서의 소비자보호에 관한 법률의 청약철회 기한 내 업체 과실이나 제품 불량 확인 시 반품비용 무료',
        ]
    }
    return (
        <div className="detail-info-notice">
            <h3>상품 정보 고시</h3>
            <ul className="detail-info-notice notice-list">
                {
                    infoNotice.names.map((name, idx) => 
                        <li>
                            <label>{name}</label>
                            <p>{infoNotice.values[idx]}</p>
                        </li>
                    )
                }          
            </ul>
            <p className="detail-info-notice p">본 상품 정보 및 거래 조건의 내용은 판매자가 직접 등록한 것으로서 등록된 정보에 대한 책임은 판매자에게 있습니다.</p>
        </div>
    );
}



