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
            <NavLink to="/">
            <img src={logo} alt="" />
            </NavLink>
          </div>
          <nav>
            <ul>
             <li>
                  <a  href="/">Home</a>
             </li>
               <li>
                  <a href="#about">About</a>
               </li>
              <li>
                  <a  href="#project">Portfolio</a>
              </li>
              <li>
                  <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
