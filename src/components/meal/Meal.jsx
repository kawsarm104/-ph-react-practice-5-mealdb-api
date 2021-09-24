import React from 'react';

const Meal = (props) => {
    console.log("showing all meals data line 4 in Meal.jsx component", props.meal)
    const {strMeal,strCategory,strMealThumb} = props.meal
    return (
        <div className='meal-cart col-12 col-md-6 col-lg-4 g-3'>
            
            <h1>{strMeal}</h1>
            <h1>{strCategory}</h1>
            <h1>{strMeal}</h1>
    <div className="card-group">
  <div className="card">
    {/* <img src="..." className="card-img-top" alt="..."> */}
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Meal;