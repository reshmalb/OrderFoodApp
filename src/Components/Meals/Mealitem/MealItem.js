import React from "react";
import classes from './MealItem.module.css'
import Mealitemform from "../Mealitemform";


const MealItem=(props)=>{ 
   
    const price=`$${ props.price.toFixed(2) }`;
    
    
    return(
        <div className={classes.meal}>
                <li >
            <div className={classes.name}>
                <h3>{props.name}</h3>
            </div>
            <div className={classes.description}>
                {props.description} 
                </div>
            <div className={classes.price}>
                {price}
                </div>
           
        </li>
        <Mealitemform></Mealitemform>
        </div>
      
   )
}

export default MealItem;