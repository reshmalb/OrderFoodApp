import React, { useContext,useState } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../Context-Store/CartContext";
import CartItem from "./CartItem";

const Cart=props=>{
    const cartCtx=useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasitems=cartCtx.items.length>0;

    // const [newAmount,setNewAmount]=useState();


    const cartItemRemoveHandler=(id)=>{
      cartCtx.removeItem({id,amount:1})

    }
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({item,amount:1})

    }


    const cartItems=<ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=><CartItem 
                                     key={item.id}
                                    name={item.name}
                                    amount={item.amount}
                                    price={item.price}
                                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                                    onAdd={cartItemAddHandler.bind(null,item.id)}

                                              ></CartItem>)}</ul>
 console.log("cartItems",cartItems)

return(
    <Modal onClose={props.onClose}>
  <div className={classes['cart-items']}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                close
            </button>
            {hasitems &&<button className={classes.button}>
                Order
            </button>}

        </div>
    </div>
    </Modal>
  
)
};
export default Cart;