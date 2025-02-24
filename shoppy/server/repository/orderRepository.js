import { db } from './db.js';

/**
 * 카카오페이 결제 완료 시 shoppy_order 테이블에 저장
 */
export const add = async(formData) => {
    // console.log('1111111111111', tid);    
    console.log('2222222222222222222', formData);    
    // console.log('add : orderList',formData.orderList);
    
    const result = await Promise.all(  
        formData.orderList.map(async(item) => {
                const values = [
                    item.size,
                    item.qty,
                    formData.totalPrice,
                    formData.type,
                    formData.tid,
                    formData.id,
                    item.pid
                ];                   
                const sql = `
                    insert into shoppy_order(size, qty, tprice, type, tid, id, pid, odate)
                        values(?, ?, ?, ?, ?, ?, ?, current_date())
                `;
                const [result] = await db.execute(sql, values); //Promise형태로 실행
                return result.affectedRows;            
        })   
    )
    console.log('33333333333333');   
    const result_rows = result.reduce((acc, cur) => acc + cur, 0);
    console.log('4444444444444');   
    return {"result_rows" : result_rows};
}

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