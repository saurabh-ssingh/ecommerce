import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return(
        <>
            <div className = 'menu-style'>
                <NavLink exact activeClassName='active-class' to = '/'>Home</NavLink>
                <NavLink exact activeClassName='active-class' to = '/about'>About Us</NavLink>
                <NavLink exact activeClassName='active-class' to = '/login'>Login Page</NavLink>
                <NavLink exact activeClassName='active-class' to = '/signup'>SignUp Page</NavLink>
                
            </div>

           
            
        </>
    );
}

export default Menu;