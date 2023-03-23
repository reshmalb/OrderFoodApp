import React ,{Fragment}from 'react';
import mealsImage from '../../assets/FoodHeader.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header=props=>{ 
   return(
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
         
           <HeaderCartButton onClick={props.onShowCart}>Show Cart</HeaderCartButton> 
        </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="delicious food"></img>            
            </div>
    </Fragment> 
   )
       
}
export default Header;