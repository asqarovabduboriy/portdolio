import React from "react";
import "./Project.css";
import img from "../../assets/imgs/1.png";
import logo from '../../assets/imgs/logo.svg'
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <>
      <section id="project">
        <div className="container">
          <div className="text_project">
            <h2>Project</h2>
            <div className="underline"></div>
            <p>Here are some of the project I have worked on</p>
          </div>
          <div className="project_wrapper">
            <div className="project_one_flex">
              <div className="project_one_img">
                <img src={img} alt="" />
              </div>
              <div className="project_one_text">
                    <img src={logo} alt="" /> 
                    <p>This website is one of the best in my portfolio. My website is built in Raect.js javascript library. This is my website using RTK QUERY.</p>
                    <Link className="btn_project" to={'https://examen-7.vercel.app/'}>View Project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
