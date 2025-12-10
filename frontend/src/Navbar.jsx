import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <><NavLink to="/userList"
               className="navlink-left">
        <h3>Users List</h3>
        
    </NavLink>
    </>
  );
};

export default Navbar;