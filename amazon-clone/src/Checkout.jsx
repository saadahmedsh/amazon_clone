import react, {useState, useEffect, createContext} from 'react'
import Navbar from './Navbar.jsx'
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css'
import Subtotal from './Subtotal.jsx'



const Checkout= () =>
{
   
  var obj=JSON.parse(sessionStorage.getItem('cart')); //initialize cart
  const [basket , updateBasket] =useState(obj);
  
  
  let temp = obj;
  const [cartTotal, set__total] =useState(0);
 
  
  function update(id)
  {


    let newBasket=[];

    for(var i=0; i < basket.length; i++)
    {
      if(basket[i].id != id)
      {
        newBasket.push(basket[i]);
      }
    }

    return newBasket;

  }


  let isEmpty=false;

  
  if(obj != undefined )
  { 
  
    isEmpty=true; //items exist

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


  

  
    
    
    
    



    
    function removefromBasket(event)
    {
      
      const id=event.target.id;
      temp=update(id); //updated basket
      
      
      updateBasket(temp);
      
    
      if(temp.length === 0)
      {
        sessionStorage.clear();
        set__total(0);
        
      }
      else
      {
        sessionStorage.setItem('cart', JSON.stringify(basket));
      }
      


    }




    useEffect(()=>
    {
      if(obj != undefined)
      {
        set__total(calculateTotal());
      }

    })

        
    
    
    
    
    
    
    


    

    

 
    

    return(

<>


<Navbar/>

<div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          
          <h2 className="checkout__title">Your shopping Basket</h2>

          
              { isEmpty  ? basket.map(item => (
                
                  <CheckoutProduct

                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  quantity={item.quantity}
                  procedure={removefromBasket}

                />
                
              )): 'No Items!'}
              
          
         
          
          
        
        </div>
      </div>

      <div className="checkout__right">
       <Subtotal
       
       total={cartTotal}
       
       />
      </div>
    </div>
  );




</>


    );




}


export default Checkout;



