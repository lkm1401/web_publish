import { db } from './db.js';

/**
 * 전체 주문정보 가져오기 : getOrderList
 */
export const getOrderList = async({id}) => {
    const sql = `
        select  sc.cid,
		sc.size,
        sc.qty,
        sm.id,
        sm.name,
        sm.phone,
        concat(sm.emailname,'@',sm.emaildomain) as email,
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