import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Meal from '../meal/Meal';
import Navbar from '../navbar/Navbar';
import './Meals.css';
const Meals = () => {
    const [allmeals, setAllmeals] = useState([])
    const [displayMeals, setDisplayMeals] = useState([])
    
    useEffect(() => {
    //    fetch('./mealdbdata.JSON')
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
           .then(data => {
               console.log("showing all meals data line 11 in Meals.jsx component", data.meals)
               setAllmeals(data.meals)
               setDisplayMeals(data.meals)

               })
    }, [])
    const handleSearch = (event) => {
        // console.log("line 19 from meals.jsx clicked", event.target.value)
        const searchMeal = event.target.value
        const matchedMeals = allmeals.filter(meal => meal.strMeal.toLowerCase().includes(searchMeal.toLowerCase()))
        setDisplayMeals(matchedMeals)
        console.log(matchedMeals)
    }
    
    return (
        <>
            <Navbar handleSearch={handleSearch}/>
            <div className=" meals-cart row m-2">
                
                <div className="col-9  row">
                     {displayMeals.map(meal => <Meal key={meal.idMeal} meal={meal} />)}
                </div>
                <div className="col-3 text-center p-3 bg-warning h-25 mt-4">
                    
                   <Cart />
                </div>
                </div>
                

            
             
        
       
        </>
    );
};

export default Meals;