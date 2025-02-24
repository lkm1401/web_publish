import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { useCart } from '../hooks/useCart.js';
import axios from 'axios';

export function useOrder() {
    const navigate = useNavigate();
    const { calculateTotalPrice } = useCart();
    const { orderList, setOrderList,
            orderPrice, setOrderPrice,
            member, setMember
        } = useContext(OrderContext);

    /** useContext로 관리되는 객체들의 CRUD 함수 정의 */
    /**
     * 결제 완료 후 주문테이블 저장 : saveToOrder
     */
    const saveToOrder = async() => {
        const saveOrderList = await getOrderList();
        const id = localStorage.getItem("user_id"); 
        const tid = localStorage.getItem("tid"); 
        const type = "KAKAO_PAY"; 
        const totalPrice = await calculateTotalPrice(saveOrderList);
        let result_rows = 0;

        let formData = {  
                            id: id,  
                            tid: tid,
                            type: type,
                            totalPrice:totalPrice, 
                            orderList:saveOrderList
                        };

        
        // if ( result.data.next_redirect_pc_url) {
        //     // setQrUrl(response.data.next_redirect_mobile_url);

        //     window.location.href = result.data.next_redirect_pc_url;
        // }
        try {
            const result = await axios.post("http://localhost:9000/order/add", formData);
        //     // window.location.href = response.data.next_redirect_pc_url;

            if (result.data.result_rows) {
                // setQrUrl(response.data.next_redirect_mobile_url);
                result_rows = result.data.result_rows;
                console.log('주문테이블 저장 성공!!');
                
            }
        } catch (error) {
            console.error("주문테이블 저장 실패:", error);
        }

        return result_rows;
    }//saveToOrder


    /**
     * 카카오페이 결제 요청 : paymentKakaoPay
     */
    const paymentKakaoPay = async() => {
        const id = localStorage.getItem("user_id"); 
        const totalPrice = calculateTotalPrice(orderList);
        const pname = orderList[0].pname.concat(" 외");
        const type = "KAKAO_PAY"; 

        let formData = {  
                            id: id,  
                            type: type,
                            totalPrice:totalPrice, 
                            orderList:orderList
                        };

        const response = await axios.post("http://localhost:9000/payment/qr", {
                        id:id,
                        item_name: pname,
                        total_amount: totalPrice, // 결제 금액 (KRW)
                        formData: formData
                    });

        if ( response.data.next_redirect_pc_url) {
            response.data.tid && localStorage.setItem("tid", response.data.tid);
            window.location.href = response.data.next_redirect_pc_url;
        }

    }//paymentKakaoPay


    /**
     * 전체 주문정보 가져오기 : getOrderList
     */
    const getOrderList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", {"id": id});  
console.log('order list-->', result.data);
        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);

        return result.data;
    }
    

    return { getOrderList, saveToOrder, paymentKakaoPay };
}

