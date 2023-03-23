import React,{Fragment, useState} from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header"; 
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Context-Store/CartProvider";


function App() {
  const [cartIsshown,seCartIsShown]=useState(false);

  const showCartHandler=()=>{
    seCartIsShown(true);
   

  }
  const hideCartHandler=()=>{
    seCartIsShown(false);
  }

  return (
    <CartProvider>
     { cartIsshown && <Cart onClose={hideCartHandler} /> } 
      <Header onShowCart={showCartHandler}/>
       
      <main>
          <Meals/>
      </main>

    </CartProvider>
 
  )
    
  
}

export default App;
