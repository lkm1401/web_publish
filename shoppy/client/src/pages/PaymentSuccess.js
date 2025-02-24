import React, { useEffect, useRef, useState, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useOrder } from '../hooks/useOrder.js';
import { AuthContext } from "../auth/AuthContext.js";
import axios from "axios";


export default function PaymentSuccess() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get("pg_token");
    const tid = localStorage.getItem("tid");
    const { saveToOrder } = useOrder();
    const hasCheckedLogin = useRef(false); 
    const [isRefresh, setIsRefresh] = useState(true);

    useEffect(()=>{  
            if (hasCheckedLogin.current) return;  // true:로그인 상태 -->  블록 return
                hasCheckedLogin.current = true; 
    
            if(isLoggedIn) {
                const approvePayment = async () => {
                    if (pg_token && tid) {
                        try {                            
                            const result_rows = await saveToOrder();
                            result_rows && console.log("결제 승인 완료:");
                        } catch (error) {
                            console.error("결제 승인 실패:", error);
                        }
                    }
                };
        
                approvePayment();
            } else {  
                const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
                select ?  navigate('/login') :  navigate('/');
                // setCartList([]);
            }
        } , [isLoggedIn]);

    // useEffect(() => {
    //     if (hasCheckedLogin.current && isRefresh) {
    //         return;  // true:로그인 상태 -->  블록 return
    //     } else {

    //         const approvePayment = async () => {
    //             if (pg_token && tid) {
    //                 try {
    //                     console.log("결제 승인 완료:");
    //                     // await getOrderList();
    //                     const result_rows = await saveToOrder();
    //                     // console.log("결제 승인 완료:2222222222222222");
    //                 } catch (error) {
    //                     console.error("결제 승인 실패:", error);
    //                 }
    //             }
    //         };
    
    //         approvePayment();

    //         hasCheckedLogin.current = true; 
    //         // setIsRefresh(true);
    //     }

        
    // }, [pg_token, tid]);

    console.log('pg_token', pg_token);
    console.log('tid', tid);
    console.log('isRefresh', isRefresh);
    



    return (        
        <div className="cart-container">                       
            <div>
                <h2>✅ 결제가 성공적으로 완료되었습니다!</h2>
                <button >주문내역 확인하기</button>
                <button onClick={()=>{ navigate("/") }}>홈으로 이동</button>
            </div>
            <img src="https://media.istockphoto.com/id/1167409887/ko/%EC%82%AC%EC%A7%84/%ED%9C%B4%EB%8C%80-%EC%A0%84%ED%99%94%EC%97%90-%EC%98%A8%EB%9D%BC%EC%9D%B8-%EC%84%A4%EB%AC%B8-%EC%A1%B0%EC%82%AC%EB%A5%BC-%EC%B1%84%EC%9A%B0%EB%8A%94-%EC%82%AC%EC%97%85%EA%B0%80.webp?a=1&b=1&s=612x612&w=0&k=20&c=OXvn8hVQiNrEgh_SokDrKy8_FWTxIrpBRIaCDpxhRrk=" alt="" />
        </div>         
    );
};


