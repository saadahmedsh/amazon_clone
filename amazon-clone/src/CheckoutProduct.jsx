import React from 'react';
import { propTypes } from 'react-currency-format';
import './CheckoutProduct.css'


function CheckoutProduct({ id, image, title, price, rating, quantity, procedure }) {


  

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price} x {quantity}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                
                <button id={id}  onClick={procedure}  >Remove from Basket</button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct;
