import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx'
import './Payment.css';
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from './CheckoutProduct.jsx'
import {Link, useHistory} from 'react-router-dom'



function Payment() {
 
let basket=JSON.parse(sessionStorage.getItem('cart'));
const [value, setValue]=useState(0);
let user=sessionStorage.getItem('username');

let history=useHistory();

const handleOrder= (event) =>
{
    event.preventDefault();
   

    let data={

    id:sessionStorage.getItem('id'),
    items_json:JSON.parse(sessionStorage.getItem('cart')),
    
      
    }

    data=JSON.stringify(data);
   


    const xhr = new XMLHttpRequest();
 
 

  xhr.open('POST', 'http://localhost:8000/amazon/checkout', true);
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json');

 
  
  xhr.onload = function () {

    if(this.responseText == 'saved')
    {
        sessionStorage.removeItem('cart');
        alert('Order Placed');
    }
    else
    {
        alert('Please Login')
    }


  }

  
  xhr.send(data);
    

}


const calculateTotal = () =>
  {
    
    
    let price=0;
    let quantity=0;
    let total=0;
 

  

    for (let i = 0; i < basket.length; i++) 
      {

       price=basket[i]['price'];
       quantity=basket[i]['quantity'];
       total=total + price * quantity;

    
      }
     
      return total;        
      
    }

  


if(user == undefined)
{
    user='Guest'
}



let isEmpty=false;
  
if(basket != undefined)
{ 

  isEmpty=true;

}


useEffect(()=>
{
  if(basket != undefined)
  {
    setValue(calculateTotal());
  }
})




 
    return (
        <>

        <Navbar/>

        <div className='payment'>
            <div className='payment__container'>
                <h1>
                Checkout (
                        <Link to="/checkout">{basket?.length} item(s)</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>Hi, {user}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                    { isEmpty  ? basket.map(item => (
                
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
            
              />
              
            )): 'No Items!'}
            
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                           

                            <form>
                           

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={() => (
                                            <h3>Order Total: ${value}</h3>
                                        )}
                                       
                                        
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button onClick={handleOrder}>
                                        Checkout
                                    </button>
                                </div>

                                
                            </form>
                    </div>
                </div>
            </div>
        </div>
      


        </>
    )
}

export default Payment;
