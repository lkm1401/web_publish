import * as repository from '../repository/orderRepository.js';

/**
 * 전체 주문정보 가져오기 : getOrderList
 */
export const getOrderList = async(req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
}