import React from 'react';

const Meal = (props) => {
    console.log("showing all meals data line 4 in Meal.jsx component", props.meal)
    const {strMeal,strCategory,strMealThumb,strInstructions,strYoutube} = props.meal
  return (
     
        <div className='meal-cart g-4
         rounded col-4 '>
        <div className="">
          <div className="card-group ">
      <div className="card ">
    <img src={strMealThumb} className="card-img-top img-fluid " alt="..."/>
    <div className="card-body text-center">
    <h5 className="card-title ">{strMeal}</h5>
    <h5>Category: {strCategory}</h5>
      <p className="card-text text-justify">{strInstructions.slice(0,200)}...</p>
         <a href={strYoutube}
       className="text-decoration-none"><small className="text-primary">
         Youtube Link:       {strYoutube}</small></a>
    </div>
  </div>
        </div>
           </div>
    
      </div>

    );
};

export default Meal;