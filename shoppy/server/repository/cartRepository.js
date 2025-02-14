import { db } from './db.js';

/**
 * 장바구니 추가
 */
export const addCart = async({id, cartList}) => {
    let result_rows = 0;
    console.log('---------> ', cartList);
    // try{
    // if(cartList.length === 1) {
    //     const {size, qty, pid} = cartList[0];
    //     const values = [size, qty, id, pid];                   
    //             const sql = `
    //                 insert into shoppy_cart(size, qty, id, pid, cdate)
    //                     values(?, ?, ?, ?, now())
    //             `;
    //             const [result] = await db.execute(sql, values); //Promise형태로 실행
    //             result_rows = result.affectedRows;            
    // }else{
    const result = await Promise.all(  
        cartList.map(async(item) => {
                const values = [item.size, item.qty, id, item.pid];   
                console.log('---------> ', values);
                
                const sql = `
                    insert into shoppy_cart(size, qty, id, pid, cdate)
                        values(?, ?, ?, ?, now())
                `;
                const [result] = await db.execute(sql, values); //Promise형태로 실행
                return result.affectedRows;            
        })   
    )
    result_rows = result.reduce((acc, cur) => acc + cur, 0);
//     } 
// }catch(error){
//     console.log('error --> ', error);
    
// }
            
    return {"result_rows": result_rows};
}