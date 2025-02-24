import React, { useState, useEffect, useContext, useRef } from "react";
import DaumPostcode from "react-daum-postcode";
import { useOrder } from '../hooks/useOrder.js';
import { AuthContext } from '../auth/AuthContext.js';
import { OrderContext } from "../context/OrderContext.js";
import { CartContext } from "../context/CartContext.js";
import axios from "axios";

import "../styles/cart.css";
import "../styles/checkoutinfo.css";

export default function CheckoutInfo() {
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const { totalPrice } = useContext(CartContext);
    const { isLoggedIn } = useContext(AuthContext);
    const { orderList, member } = useContext(OrderContext);
    const { getOrderList, paymentKakaoPay } = useOrder();
    const [ qrUrl, setQrUrl] = useState('');
    const   zipcodeRef = useRef(null), 
            addressRef = useRef(null), 
            detailAddressRef = useRef(null),
            terms1Ref = useRef(null),
            terms2Ref = useRef(null);

    useEffect(()=>{
        if(isLoggedIn) {
            getOrderList();
        }
    }, [isLoggedIn]);

    const [isOpen, setIsOpen] = useState(false);    /** 주소검색 버튼Toggle */
    const handleToggle = () => {    /** 주소 검색 버튼 */
        detailAddressRef.current.value = '';
        setIsOpen(!isOpen);
    };

    /** 결제하기 버튼 이벤트 처리 */
    const handlePayment = async() => {
        console.log(terms1Ref.current.checked);
        console.log(terms2Ref.current.checked);
        if(!(terms1Ref.current.checked && terms2Ref.current.checked)) {
            alert("약관 동의 후 결제가 진행됩니다.");
        } else {
            await paymentKakaoPay();
            
            // const id = localStorage.getItem("user_id");        
            // try {
            //     const response = await axios.post("http://localhost:9000/payment/qr", {
            //         id:id,
            //         item_name: "테스트 상품",
            //         total_amount: 1000, // 결제 금액 (KRW)
            //     });
            //     // window.location.href = response.data.next_redirect_pc_url;

            //     if ( response.data.next_redirect_pc_url) {
            //         // setQrUrl(response.data.next_redirect_mobile_url);

            //         window.location.href = response.data.next_redirect_pc_url;
            //     }
            // } catch (error) {
            //     console.error("QR 결제 요청 실패:", error);
            // }
        }//if
    }//handlePayment

    /** 배송지 변경 */
    const addressUpdate = () => {        
        const zipcode = zipcodeRef.current.value;
        const address = addressRef.current.value;
        const detail = detailAddressRef.current.value;
        const formData = {zipcode:zipcode, address:address, detail:detail};
        
        //배송지 변경 - 서버연동 코드 추가        
        
    }

    //---- DaumPostcode 관련 디자인 및 이벤트 시작 ----//
    const themeObj = {
        bgColor: "#FFFFFF",
        pageBgColor: "#FFFFFF",
        postcodeTextColor: "#C05850",
        emphTextColor: "#222222",
    };

    const postCodeStyle = {
        width: "360px",
        height: "480px",
    };

    const completeHandler = (data) => {
        setZipcode(data.zonecode);
        setAddress(data.address);
    };

    const closeHandler = (state) => {
        if (state === "FORCE_CLOSE") {
        setIsOpen(false);
        } else if (state === "COMPLETE_CLOSE") {
        setIsOpen(false);
        }
    };
    //---- DaumPostcode 관련 디자인 및 이벤트 종료 ----//
    

return (
    <div className="cart-container">
    <h2 className="cart-header"> 주문/결제</h2>
    <div className="section">
        {/* 구매자 정보 */}
        <h2 className="section-title">구매자정보</h2>
        <div className="info-box">
        <div className="info-grid">
            <div className="label">이름</div>
            <div className="value">{member.name}</div>

            <div className="label">이메일</div>
            <div className="value">{member.email}</div>

            <div className="label">휴대폰 번호</div>
            <div className="value phone-input">
            <input type="text" defaultValue={member.phone} />
            <button className="btn">수정</button>
            </div>
        </div>
        </div>
    </div>
    {/* 받는사람 정보 */}
    <div className="section">
        <h2 className="section-title">
        받는사람정보 &nbsp;&nbsp;&nbsp;
        <button onClick={handleToggle}>배송지 변경</button>
        </h2>
        <div className="info-box">
        <div className="info-grid">
            <div className="label">이름</div>
            <div className="value">{member.name}</div>

            <div className="label">배송주소</div>
            {   member.zipcode ? 
                <div className="value">{member.zipcode}/{member.address}</div>
                :
                <div className="value">
                    { zipcode ? (
                        <>
                            <input type="text" value={zipcode} className="zipcode" ref={zipcodeRef}/>
                            <input type="text" value={address} ref={addressRef}/>
                            <input type="text" placeholder="상세정보 입력" ref={detailAddressRef}/>
                            <button className="btn" onClick={addressUpdate}>주소 변경</button>
                        </>
                    ) :  "배송지를 추가해주세요!!"}
                </div>
            }            

            <div className="label">연락처</div>
            <div className="value">{member.phone}/{member.phone}</div>

            <div className="label">배송 요청사항</div>
            <div className="value phone-input">
            <input type="text" defaultValue="문 앞" />
            <button className="btn">변경</button>
            </div>
        </div>
        </div>
    </div>
    {isOpen && (
        <div>
        <DaumPostcode
            className="postmodal"
            theme={themeObj}
            style={postCodeStyle}
            onComplete={completeHandler}
            onClose={closeHandler}
        />
        </div>
    )}

    {/* 주문 정보 */}
    <div className="section">
        <h2 className="section-title">주문 상품</h2>
        <div className="info-box">
        <div className="info-grid">
            { orderList && orderList.map(item => 
                <>
                    <div className="label">상품명</div>
                    <div className="value">
                        <img src={item.image} alt="product image" style={{width:'35px'}} />
                        {item.pname}, {item.info}, 수량({item.qty}), 가격({item.price.toLocaleString()}원)
                    </div>
                </>
            )}
        </div>
        </div>
    </div>

    <div class="section">
        <h2>결제정보</h2>
        <table class="payment-table">
        <tr>
            <td>총상품가격</td>
            <td class="price">{totalPrice.toLocaleString()}원</td>
        </tr>
        <tr>
            <td>즉시할인</td>
            <td class="discount">-0원</td>
        </tr>
        <tr>
            <td>할인쿠폰</td>
            <td class="coupon">
            0원 <span class="info">적용 가능한 할인쿠폰이 없습니다.</span>
            </td>
        </tr>
        <tr>
            <td>배송비</td>
            <td class="price">0원</td>
        </tr>
        <tr>
            <td>쿠페이캐시</td>
            <td class="price">
            0원 <span class="info">보유 : 0원</span>
            </td>
        </tr>
        <tr class="total">
            <td>총결제금액</td>
            <td class="total-price">{totalPrice.toLocaleString()}원</td>
        </tr>
        </table>
    </div>

    <div class="section">
        <h2>결제 수단</h2>
        <div class="payment-method">
            <label class="radio-label">
                <input type="radio" name="payment" checked /> 카카오페이
                <span class="badge">최대 캐시적립</span>
            </label>
        </div>

        <div class="payment-method">
        <label class="radio-label">
            <input type="radio" name="payment" />
            쿠페이 머니 
        </label>
        </div>

        <div class="payment-method">
        <label class="radio-label">
            <input type="radio" name="payment" />
            다른 결제 수단 <span class="arrow">▼</span>
        </label>
        </div>
    </div>

    <div class="terms">
        <input type="checkbox" id="terms" ref={terms1Ref}/>
        <label for="terms">구매조건 확인 및 결제대행 서비스 약관 동의</label>
        <br />
        <input type="checkbox" id="privacy" ref={terms2Ref}/>
        <label for="privacy">개인정보 국외 이전 동의</label>
    </div>

    <button className="pay-button" onClick={handlePayment}>결제하기</button>
    </div>
);
}