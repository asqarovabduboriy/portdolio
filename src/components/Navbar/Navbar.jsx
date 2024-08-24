import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/web.jpg";
import { IoMenuSharp } from "react-icons/io5";
import Mobilenav from "./Mobilenav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="toggle">
                <button onClick={() => setOpen(!open)}>
                  <IoMenuSharp />
                </button>
              </div>
        </div>
      </header>

      {open ? <Mobilenav setOpen={setOpen} /> : <></>} 
    </>
  );
};

export default Navbar;
