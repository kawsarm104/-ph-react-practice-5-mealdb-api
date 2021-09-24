import React, { useEffect, useState } from 'react';
import './Meals.css';
const Meals = () => {
    const [meals, setMeals] = useState([])
    
    useEffect(() => {
       fetch('./mealdbdata.JSON')
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => console.log(data.meals))
    }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default Meals;