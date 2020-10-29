
import './App.css';
import React, { useState } from 'react';
import Paypal from './components/Paypal'

function App() {

  const [checkout, setCheckout] = useState(false)

  return (
    <div className="App">
      {/* If checkout button is clicked it will render the paypal button on user's screen */}
      { checkout ? (
        <Paypal />

      ) : (
        // Creating button
      <button 
        // Adding clickability to button
        onClick={()=>{
          //
          setCheckout(true);    
          }}
          >
          Checkout
        </button>
          )}
    </div>
  );
}

export default App;
