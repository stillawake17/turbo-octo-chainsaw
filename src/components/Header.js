import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (                
     <header>
      <h3>{props.title}</h3>
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pay">Pay</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projectGallery">Projects</NavLink>
        {/* <NavLink to="/project">Project</NavLink> */}
        <NavLink to="/book">Books</NavLink>
        </nav>
        </header>
         )};
         
    export default Header;