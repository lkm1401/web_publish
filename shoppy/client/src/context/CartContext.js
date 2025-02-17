import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cartList, setCartList] = useState([]);
    const [ cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{ cartList, setCartList, cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
}


