import React,{useContext} from 'react';
import CartContext from '../../Context-Store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=(props)=>{
    
    const cartCtx = useContext(CartContext);

    console.log("Cart=",cartCtx.items.amount)
    const numberOfCartItems  = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
   
        console.log("number of cartitems",numberOfCartItems)

    return ( 
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}> <CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    )
}

export default HeaderCartButton;