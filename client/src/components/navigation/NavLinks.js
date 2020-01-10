import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';


export default class NavLinks extends React.Component{
    render(){
        return(
           <ul className="nav-links">
               <li>
                   <NavLink to="/" exact>Home</NavLink>
               </li>
               <li>
                   <NavLink to="/login">Login</NavLink>
               </li>
               <li>
                   <NavLink to="/signup">Signup</NavLink>
               </li>
               <li>
                   <NavLink to="/add-book">Add Book</NavLink>
               </li>
               <li>
                   <NavLink to="/books">Search Books</NavLink>
               </li>
               <li>
                   <NavLink to="/my-books">My Books</NavLink>
               </li>
               <li>
                   <NavLink to="/change-colour">Change Colour</NavLink>
               </li>
           </ul>
        );
    }
}