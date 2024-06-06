import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/imgs/web.jpg'

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
             <li>
                  <NavLink  to="/">Home</NavLink>
             </li>
               <li>
                  <NavLink to="/#about">About</NavLink>
               </li>
              <li>
                  <NavLink to="#3">Portfolio</NavLink>
              </li>
              <li>
                  <NavLink to="#4">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
