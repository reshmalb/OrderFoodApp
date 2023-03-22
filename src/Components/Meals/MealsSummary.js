import React from "react";
import classes from './MealsSummary.module.css'

const MealsSummary=()=>{
    return (<section className={classes.summary}>
        <h1>Delicious Food, Delivered To you!!</h1>
        <p> Choose Your Food from our broad selection of available meals and
            enjoy a delicious lunch or dinner at home. </p>
        <p>All our foods are cooked with high-quality ingredients,just-in-time
            and of course by experienced chefs..
        </p>
    </section>)
}
export default MealsSummary;