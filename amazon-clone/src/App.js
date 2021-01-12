import './App.css';
import Checkout from './Checkout.jsx'
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup.jsx'
import Payment from './Payment.jsx'


import Home from './Home.jsx'

function App() {
  return (

    <>

    <Switch>
      <Route exact path='/'>
            <Home/>
      </Route>

      <Route exact path='/checkout'>
            <Checkout/>
      </Route>

      <Route exact path='/payment'>
          <Payment/>      
      </Route>



      <Route exact path='/signup'>
            <Signup/>
      </Route>

    </Switch>


    
    </>
   
   
  );
}

export default App;
