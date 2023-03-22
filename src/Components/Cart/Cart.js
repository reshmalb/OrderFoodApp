import React from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";


const Cart=props=>{

    const cartItems=<ul className={classes['cart-items']}>{[{id:'c1',
                       name:'Biriyani',
                       amount:2,
                       price:400.00 
 }].map((item)=><li>{item.name}</li>)}</ul>

return(
    <Modal onClose={props.onClose}>
  <div className={classes['cart-items']}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount:</span>
            <span>33.4</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                close
            </button>
            <button className={classes.button}>
                Order
            </button>

        </div>
    </div>
    </Modal>
  
)
};
export default Cart;