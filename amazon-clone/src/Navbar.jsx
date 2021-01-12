import react, {useContext, useState} from 'react'
import './Navbar.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Items.js'
import {CartLength} from './Home.jsx'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'




const Navbar = () =>
{


let count=useContext(CartLength); //context api to update navbar length
const [show, setShow] = useState(false); //for modal


const [user, setUser] = useState(sessionStorage.getItem('user'));  //check if user exists 
const [username, setUserName]= useState(sessionStorage.getItem('username'));//set the username 

//initializing user and username

if(user == undefined)
{
  setUser(false);

}
 

if(username == undefined)
{
  setUserName(' ');

}
 



  const handleClose = () => setShow(false);    //handle modals
  const handleShow = () => setShow(true);


  const handleLogout= ()=>
  {
    
    setUser(false);
    sessionStorage.clear();
    
  }


  
  const formHandler= (event) =>
  {
    event.preventDefault();
    const _email=document.getElementById('email').value;
    const _password=document.getElementById('password').value;

    let data={

      email:_email,
      password:_password,
      
    }


    data=JSON.stringify(data);
    const xhr = new XMLHttpRequest();

 
 

  xhr.open('POST', 'http://localhost:8000/amazon/register', true);
  xhr.getResponseHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json');

 
  
  xhr.onload = function () {
    const alert= document.getElementById('alert');

      if(this.responseText != 'False'){

        setUser(true); 
        sessionStorage.setItem('user', true);
        alert.style.display='none';
        const response_data=JSON.parse(this.responseText);  
       

        sessionStorage.setItem('username', response_data['name']);
        sessionStorage.setItem('id', response_data['id']);
        setUserName(response_data['name']);
        handleClose();
   
          
      }

      else{

        
        setUser(false);
        alert.style.display='block';
     
          
      }
  }

  
  xhr.send(data);


  }


  //Ajax end



 

 return(

    <>



    {/* modal */}

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                /></Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <div className='login__container'>
                <h1>Sign-in</h1>

             
  <Alert id='alert'  variant='danger'>
        Username does not exist
  </Alert>
   


                <form onSubmit={formHandler} >
                    <h5>E-mail</h5>
                    <input id='email' type='text'  />

                    <h5>Password</h5>
                    <input id='password' type='password'  />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/signup'>
                <button  className='login__registerButton'>Create your Amazon Account</button>
                </Link>
        
        </div>
          
      </Modal.Body>
       
      </Modal>





    {/*  modal end */}




<div className="header">
   
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
  

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div   onClick={user ? undefined: handleShow}  className="header__option">
          

          <span className="login-span">

          {user ? `Hi, ${username} ` : 'Login' }

          </span>

        
      
          <div onClick={user ? handleLogout: undefined}><span className="header__optionLineTwo">{user ? 'logout': undefined}</span></div> 
             
            
          </div>
    

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
     
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to='/checkout'>   
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span id='cart-span' className="header__optionLineTwo header__basketCount">
             {count}
            </span>
          </div>
        </Link>  
      
      </div>
    </div>





    </>





 );



}



export default Navbar;