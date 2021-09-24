import React from 'react';

const Meal = (props) => {
    console.log("showing all meals data line 4 in Meal.jsx component", props.meal)
    const {strMeal,strCategory,strMealThumb,strInstructions,strYoutube} = props.meal
    return (
        <div className='meal-cart col-12 col-md-6 col-lg-4 g-4
         rounded '>

    <div className="card-group">
  <div className="card">
    <img src={strMealThumb} className="card-img-top img-fluid " alt="..."/>
    <div className="card-body text-center">
    <h3 className="card-title ">{strMeal}</h3>
    <h5>Category: {strCategory}</h5>
      <p className="card-text text-justify">{strInstructions.slice(0,300)}...</p>
         <a href={strYoutube}
                            className="text-decoration-none"><small className="text-primary">
         Youtube Link:       {strYoutube}</small></a>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Meal;