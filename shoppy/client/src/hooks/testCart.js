// import { useContext } from 'react';
// import { CartContext } from "../context/CartContext";
// import axios from 'axios';

// export function testCart() {
//     // const { cartCount, setCartCount, cartList, setCartList } = useContext(CartContext);

//     /** 새상품 장바구니 상품 추가 */
//     const saveToCartList = async(formData) => {
//         const result = await axios
//                                         .post("http://localhost:9000/cart/add", formData) ;
//                 // .then((res) => {
//                 //     console.log('list-->', res.data);
//                 //     setCartList(res.data);
//                 //     })
//                 // .catch((error) => console.log(error));
// console.log('saveResult--->> ', result.data);
//             if(result.data.result_rows) {
//                 setCartCount(cartCount+1);
//                 getCartList();
//             }
//         // setCartList(updateCartList);   
//         return result.data.result_rows;             
//     }



//     /** 전체 장바구니 상품 조회 */
//     const getCartList = async() => {
//         const id = localStorage.getItem("user_id");
//         const result = await axios
//                                         .post("http://localhost:9000/cart/items", {"id":id}) ;
//                 // .then((res) => {
//                 //     console.log('list-->', res.data);
//                 //     setCartList(res.data);
//                 //     })
//                 // .catch((error) => console.log(error));
        
//         // setTimeout(()=>{
//             setCartList(result.data);  
//         // }, 0);                     
//     }


//     return { getCartList, saveToCartList };
// }