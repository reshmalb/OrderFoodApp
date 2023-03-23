import React,{useContext} from "react";
import classes from './MealItem.module.css'
import Mealitemform from "../Mealitemform";
import CartContext from "../../../Context-Store/CartContext";


const MealItem=(props)=>{ 
   const cartCtx=useContext(CartContext);

    const price=`$${ props.price.toFixed(2) }`;

    const addToCartHandler=(amount)=>{
        console.log("amount=",amount)
        cartCtx.addItem({
            id:props.id,
        name:props.name,
        amount:amount,
    price:props.price    })
    }
    
    
    return(
        <div className={classes.meal}>
                <li >
            <div className={classes.name}>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.description} >
                {props.description} 
                </div>
            <div className={classes.price}>
                {price}
                </div>
           
        </li>
        <Mealitemform onAddToCart={addToCartHandler} ></Mealitemform>
        </div>
      
   )
}

export default MealItem;