import React from "react";
import { IoMdClose } from "react-icons/io";

const Mobilenav = ({ setOpen }) => {


  return (
    <>
      <div className="wrapper_mobile" onClick={() => setOpen(false)}></div>
      <div className="modal">
        <div className="container">
            <button className="close" onClick={() => setOpen(false)}><IoMdClose /></button>
          <nav className="nav_mobile">
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
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
