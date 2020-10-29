import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [checkout, setCheckout] = useState(false)

  return (
    <div className="App">
      
      { checkout ? (
        <Paypal />

      ) : (

      <button 
        onClick={()=>{
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
