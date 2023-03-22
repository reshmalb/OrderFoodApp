import React,{Fragment} from "react";
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS=[{
    id:'m1',
    name:'Biriyani',
    description:'veg',
    price:200
},
{
    id:'m2',
    name:'Noodles',
    description:'Hakka Noodles',
    price:250},
    {
        id:'m3',
        name:'Tandoori roti',
        description:'Authentic Roti',
        price:100
    },
    {
        id:'m4',
        name:'Paneer Roti',
        description:'Delicious Paneer',
        price:150
    }



];

const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map(meal=>
        <li>{meal.name}</li>)

        return (<section className={classes.meal}>
                    <ul>
                        {mealsList}
                    </ul>
        </section>)


}

export default AvailableMeals;