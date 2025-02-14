import { db } from './db.js';


/**
 * 장바구니 전체 조회
 */
export const getItems = async({id}) => {
    const sql = `
            select  sc.cid,
                    sc.size,
                    sc.qty,
                    sm.id,
                    sm.zipcode,
                    sm.address,
                    sp.pid,
                    sp.pname,
                    sp.price,
                    sp.description as info,
                    concat('http://localhost:9000/', sp.upload_file->>'$[0]') as image
                from shoppy_cart sc,
                    shoppy_member sm,
                    shoppy_product sp
                where sc.id = sm.id 
                        and sc.pid = sp.pid
                        and sm.id = ?
    `;
    const [result] = await db.execute(sql, [id]);
    return result; 
}













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