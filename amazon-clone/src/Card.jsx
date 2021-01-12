import react from 'react'
import './Card.css'





const Card= (props) =>
{



  

 


    return(

        <>
           

<div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong id='price'>{props.price}</strong>
        </p>
        <div className="product__rating">
      
              {
              Array(props.rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))
                
                
                }
       


          
          
        
        </div>
      </div>

      <img src={props.image} alt="product" />

      <button id={props.id} onClick={props.procedure}>Add to Basket</button>
    </div>




        </>


    );





}



export default Card;

