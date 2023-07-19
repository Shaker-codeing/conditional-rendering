import React from 'react';
import './Shirt.css'

const Shirt = ({ shirt, handleAddToCart }) => {
    const { picture, name, price } = shirt
    return (
        <div className='shirt'>
            <img src={picture} alt="" />
            <p>name {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => { handleAddToCart(shirt) }}>Buy this</button>
        </div>
    );
};

export default Shirt;