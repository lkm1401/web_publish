import React from 'react';

export default function Carts({cartList}) {
    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <table border="1">
                <tr>
                    <th>PID</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
                {
                    cartList.map((cartItem) => 
                        <tr>
                            <td>{cartItem.pid}</td>
                            <td>{cartItem.size}</td>
                            <td>{cartItem.qty}</td>
                            <td>{cartItem.price}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

