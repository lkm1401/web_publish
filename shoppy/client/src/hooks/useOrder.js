import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import axios from 'axios';

export function useOrder() {
    const {orderList, setOrderList,
        orderPrice, setOrderPrice } = useContext(OrderContext);

    /** useContext로 관리되는 객체들의 CRUD 함수 정의 */
    /**
     * 전체 주문정보 가져오기 : getOrderList
     */
    const getOrderList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", {"id": id});
        console.log('result.data-->', result.data);
        
        setOrderList(result.data);
    }
    


    return { getOrderList };
}

