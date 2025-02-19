import { db } from './db.js';

/**
 * 전체 주문정보 가져오기 : getOrderList
 */
export const getOrderList = async({id}) => {
    const sql = `
            select * from view_order_list
                where id=?
    `;
    const [result] = await db.execute(sql, [id]);
    return result; 
}