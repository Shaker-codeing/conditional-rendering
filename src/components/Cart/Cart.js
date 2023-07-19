import React from 'react';

const Cart = ({ cart, handleRemove }) => {

    // conditional element
    let message;
    if (cart.length === 0) {
        message = <p>Please Buy at lest one item</p>
    }
    else {
        message = <p>Thanks for Buying</p>
    };


    return (
        <div>
            <h4> Order Summary</h4>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(ts => <p
                    key={ts._id}
                >{ts.name}
                    <button></button>
                    <button onClick={() => handleRemove(ts)}>X</button>
                </p>)
            }
            {message}
            {cart.length === 3 ? <p>Tin jon ke gift deba</p> : <p>kino kino</p>}
            <p>and operator</p>
            {cart.length === 2 && <h2>Double items</h2>}
        </div>
    );
};

export default Cart;