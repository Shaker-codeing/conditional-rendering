import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const shirts = useLoaderData();

    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        // console.log(tshirt)
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            alert('Tshirt Already Added')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
        // const newCart = [...cart, tshirt];
        // setCart(newCart)

    }


    const handleRemove = tshirt => {
        // console.log(tshirt)
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining)
    }

    return (
        <div className='container'>
            <div className='t-shirt'>

                {
                    shirts.map(shirt => <Shirt
                        key={shirt._id}
                        shirt={shirt}
                        handleAddToCart={handleAddToCart}
                    ></Shirt>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}
                    handleRemove={handleRemove}></Cart>
            </div>
        </div>
    );
};

export default Home;