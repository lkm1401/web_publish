import * as repository from '../repository/orderRepository.js';

/**
 * 결제 후 주문 테이블 저장
 */
export const add = async(req, res) => {
    const result = await repository.add(req.body);    
    res.json(result);
    res.end();    
}

/**
 * 전체 주문정보 가져오기 : getOrderList
 */
export const getOrderList = async(req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
}