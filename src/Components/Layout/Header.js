import React ,{Fragment}from 'react';
import mealsImage from '../../assets/FoodHeader.png'
import classes from './Header.module.css'

const Header=props=>{ 
   return(
    <Fragment>
        <header className={classes.header}>
         
           <button>Show Cart</button> 
        </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="delicious food"></img>            
            </div>
    </Fragment> 
   )
       
}
export default Header;