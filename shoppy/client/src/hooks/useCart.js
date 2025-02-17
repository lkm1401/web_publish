import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import axios from 'axios';

export function useCart() {
    const { cartCount, setCartCount, cartList, setCartList } = useContext(CartContext);

    /** 새상품 장바구니 상품 추가 */
    const saveToCartList = async(formData) => {
        const result = await axios.post("http://localhost:9000/cart/add", formData) ;
        if(result.data.result_rows) {
            setCartCount(cartCount+1);
            getCartList();
        }
        return result.data.result_rows;             
    }

    /** 장바구니 수량 업데이트  */
    const updateCartList = async(cid) => {
        const result = await axios.put("http://localhost:9000/cart/updateQty", {"cid":cid})
        result.data.result_rows && getCartList();
    
        return result.data.result_rows;             
    }


    /** 전체 장바구니 카운트 조회 */
    const getCount = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/count", {"id":id}) ;
        setCartCount(result.data.count);  
    }

    /** 전체 장바구니 상품 조회 */
    const getCartList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/items", {"id":id}) ;
        setCartList(result.data);  
    }


    return { getCartList, saveToCartList, getCount, updateCartList };
}