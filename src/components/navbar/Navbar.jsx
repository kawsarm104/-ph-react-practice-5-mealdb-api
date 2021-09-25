import React from 'react';
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div className="bg-warning p-4">
         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MealDB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
     

       
      </ul>
      
        <input className="form-control me-2 w-25" onChange={props.handleSearch} type="search" placeholder="Search your meal..." aria-label="Search"/>
        
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;