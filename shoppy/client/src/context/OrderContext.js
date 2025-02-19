import { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [ orderList, setOrderList] = useState([]);
    const [ orderPrice, setOrderPrice] = useState(0);

    return (
        <OrderContext.Provider value={{ orderList, setOrderList,
                                        orderPrice, setOrderPrice  }}>
            {children}
        </OrderContext.Provider>
    );
}


