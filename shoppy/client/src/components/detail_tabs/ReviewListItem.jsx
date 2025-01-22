import React from 'react';
import { PiThumbsUp } from "react-icons/pi";
import { TbThumbUp } from "react-icons/tb";

export default function ReviewListItem() {
    const text = `듣던대로 패키징부터 너무 고급스럽고 예뻐요 💖<br/>169고 미디움 했는데 사이즈 딱이에요!<br/>
                    남편도 넘 예쁘다고 오래 입을 수 있겠다 하네요.<br/>아주 살~짝 무거운데, 이건 원단이 너무 많이 들어가서 어쩔 수 없는 부분 같아요 ☺️`;
    const showText = text.replace(/<br\/>/g, ' ');
                        

    return (
        <div className="review-list-item">
            <div className="pdt_review_info">
                <div className="product_review_info_left">
                        <div className="pdt_review_option">
                            <p>
                                <span>구매옵션 : MEDIUM</span>
                            </p>
                            <p>
                                <span>사이즈정보 : 169cm</span>
                            </p>
                        </div>
                </div>
                <p className="product_review_info_right">
                    <em>da********</em>
                    <span>2025.01.22</span>
                </p>
            </div>
            
            <ul className="product_review_evaluation">
                    <li>
                        <div>
                            <strong>사이즈</strong>
                            <em>적당함</em>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>색상</strong>
                            <em>같음</em>
                        </div>
                    </li>
                    <li>
                        <div>
                            <strong>소재</strong>
                            <em>같음</em>
                        </div>
                    </li>
            </ul>
            
            <ul className="pdt_review_photo">
                    <li>
                        <img src="https://media.wconcept.co.kr/review/301463995/301463995_1737516673578.jpeg?RS=300" />
                    </li>
            </ul>
            <div className="pdt_review_detail">
                <p className="pdt_review_text">
                    {showText}
                    {/* 듣던대로 패키징부터 너무 고급스럽고 예뻐요 💖<br/>169고 미디움 했는데 사이즈 딱이에요!<br/>
                    남편도 넘 예쁘다고 오래 입을 수 있겠다 하네요.<br/>아주 살~짝 무거운데, 이건 원단이 너무 많이 들어가서 어쩔 수 없는 부분 같아요 ☺️ */}
                </p>
            </div>
            <div className="product_review_reaction">
                <div className="btn_report_item">
                        <button type="button" className="btn_report_item link_txt" ><span>신고</span></button>
                        <button type="button" className="btn_report_item link_txt" ><span>숨김</span></button>
                </div>
                <button type="button" className="review-like">
                    <span><TbThumbUp /></span><span>0</span>
                </button>
            </div>
            
        </div>
    );
}

