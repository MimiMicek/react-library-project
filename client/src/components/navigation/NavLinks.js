import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import history from '../../history';
export default class NavLinks extends React.Component{

    logOut(e) {
        e.preventDefault();

        localStorage.removeItem("usertoken");

        window.location.reload(false);

    }

    render(){

        const noAuth = (
            <ul className="nav-links">
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>
                </li>
            </ul>
        )                
       
        const withAuth = (
            <ul className="nav-links">
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
                    <NavLink to="" onClick={this.logOut.bind(this)}>Logout</NavLink>
                </li>
            </ul>
        )

        return(
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    {   
                        localStorage.usertoken ? 
                        withAuth : 
                        noAuth 
                    }
                </ul>            
        );
    }
}