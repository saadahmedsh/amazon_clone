import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'
import { useHistory } from 'react-router-dom'



function Subtotal(props) {

 let history=useHistory();


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            
              Subtotal: <strong>${props.total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
       
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
