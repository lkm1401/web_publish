import { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [ orderList, setOrderList] = useState([]);
    const [ orderPrice, setOrderPrice] = useState(0);
    const [ member, setMember ] = useState({});

    return (
        <OrderContext.Provider value={{ orderList, setOrderList,
                                        orderPrice, setOrderPrice,
                                        member, setMember
                                        }}>
            {children}
        </OrderContext.Provider>
    );
}


