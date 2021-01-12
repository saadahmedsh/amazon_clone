import react, {createContext , useState, useEffect} from 'react'
import Card from './Card.jsx'
import './Home.css'
import Items from './Items.js'
import Navbar from './Navbar.jsx'
import Carousel from './Carousel.jsx'



const CartLength=createContext();




const Home= () =>
{


  const [basket, pushItem] =useState([]);
  var obj=JSON.parse(sessionStorage.getItem('cart'));
  
  var temp=0;
  
  if(obj != undefined)
  {
 
    for(var i=0; i < obj.length; i++)
    {
      temp=temp + obj[i].quantity;  //set cart length

    }

    
    
  }
 
  const [number, setnumber ] = useState(temp);
  



  const Exists = (id) =>
  {

    var flag=false;

    for (let i = 0; i < basket.length; i++) {

      if(basket[i].id == id)
      {
        flag  =  true;
        break;
      }
      
      
    }

    return flag;

    
  }

  const upgradeQuantity = (id) =>
  {

   

    for (let i = 0; i < basket.length; i++) {

      if(basket[i].id == id)
      {
        basket[i].quantity =  basket[i].quantity +1;
        break;
      }
      
      
    }

   

    
  }


  function addToBasket(event)
  {
    
    const id=event.target.id;
    setnumber(number+1);

    
    
    if(Exists(id))
    {
      upgradeQuantity(id);
    }
    else
    {
      basket.push(Items[id-1]);
    }


    sessionStorage.setItem('cart', JSON.stringify(basket));

  
  }



  
  return(

    <>

          

    <CartLength.Provider value={number}>
      <Navbar/>
    </CartLength.Provider>

    <Carousel/>

    <div className="home">

    <div className="home__container">
  

    <div className="home__row">
      <Card
        id={1}
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        procedure={addToBasket}
      />
      <Card
        id={2}
        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
        price={239.0}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        procedure={addToBasket}
      />
    </div>

    <div className="home__row">
    
      <Card
        id={3}
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
        price={199.99}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        procedure={addToBasket}
      />
  
      <Card
        id={4}
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={98.99}
        rating={5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        procedure={addToBasket}
      />
    
      <Card
        id={5}
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        price={598.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        procedure={addToBasket}
      />
    </div>

    <div className="home__row">
      <Card
        id={6}
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price={1094.98}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        procedure={addToBasket}
      />
    </div>
  </div>
</div>




    </>



);




}


export default Home;
export {CartLength};