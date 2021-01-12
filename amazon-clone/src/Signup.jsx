import react from 'react'
import './Navbar.css'
import Navbar from './Navbar.jsx'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col} from 'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './Signup.css'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { useHistory } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'





const Signup = () =>
{
  
 




  const formHandler= (event) =>
  {
    event.preventDefault();
    
    const _email=document.getElementById('email').value;
    const _cemail=document.getElementById('cemail').value;
    const _password=document.getElementById('password').value;
    const _name=document.getElementById('name').value;


    if(_email == _cemail)
    {

    let data={
      name:_name,
      email:_email,
      password:_password,
      
    }

    document.getElementById('alert-email').style.display='none';


    data=JSON.stringify(data);

    
    const xhr = new XMLHttpRequest();




  xhr.open('POST', 'http://localhost:8000/amazon', true);
  xhr.getResponseHeader('Content-Type', "application/json");
// xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
  xhr.setRequestHeader('Content-Type', "application/json");
 
  
  xhr.onload = function () {

    if(this.responseText == 'True')
    {
      
      document.getElementById('alert-signup').style.display='block';
    }
    else
    {
      document.getElementById('alert-signup').style.display='none';
      history.push('/');

    }
     
  }

  
  xhr.send(data);
}
else
{
  document.getElementById('alert-email').style.display='block';
  document.getElementById('alert-signup').style.display='none';

}


  }







  let history = useHistory();






    return (

        <>

        <Navbar/>

        <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        </div>

     



<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
    <Alert id='alert-signup' variant='danger'>
    User already exists!
  </Alert>

  <Alert id='alert-email' variant='danger'>
    Emails do not match!
  </Alert>

      <form onSubmit={formHandler}>
        
        <div className="grey-text">
          <MDBInput  id='name' label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput  id='email' label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput id='cemail' label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <MDBInput id='password' label="Your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
      
        <button type='submit' className='login__signInButton'>Sign Up</button>
      
       
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>





  

        </>



    );



}



export default Signup;


