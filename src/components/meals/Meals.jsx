import React, { useEffect, useState } from 'react';
import Meal from '../meal/Meal';
import './Meals.css';
const Meals = () => {
    const [allmeals, setAllmeals] = useState([])
    
    useEffect(() => {
       fetch('./mealdbdata.JSON')
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
           .then(data => {
               console.log("showing all meals data line 11 in Meals.jsx component", data.meals)
               setAllmeals(data.meals)

               })
    }, [])
    
    return (
        <div className="meals-cart row">
            
            {allmeals.map(meal => <Meal key={meal.idMeal} meal={meal} />)}
        </div>
    );
};

export default Meals;