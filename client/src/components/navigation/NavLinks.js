import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';
import Login from '../user/Login';
import Signup from '../user/Signup';

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
                   <NavLink to="/id/add-book">Add Book</NavLink>
               </li>
               <li>
                   <NavLink to="/id/search-books">Search Books</NavLink>
               </li>
           </ul>
        );
    }
}