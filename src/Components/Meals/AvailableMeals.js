import React,{Fragment} from "react";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./Mealitem/MealItem";
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
        <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description}
        price={meal.price}></MealItem>)

        return (<Card  className={classes.meal} >
              <section >
                    <ul>
                        {mealsList}
                    </ul>
        </section>
        </Card>
        
        )

}

export default AvailableMeals;