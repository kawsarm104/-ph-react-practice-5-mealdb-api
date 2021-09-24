import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

            </nav>
        </div>
    );
};

export default Navbar;