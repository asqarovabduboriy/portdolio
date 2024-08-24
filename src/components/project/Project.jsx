import React, { useEffect } from "react";
import "./Project.css";
import img from "../../assets/imgs/1.png";
import img1 from "../../assets/imgs/2.png";
import logo from "../../assets/imgs/logo.svg";
import logo1 from "../../assets/imgs/logo (1).svg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section id="project">
        <div className="container" >
          <div className="text_project" data-aos="fade-up">
            <h2>Project</h2>
            <div className="underline"></div>
            <p>Here are some of the project I have worked on</p>
          </div>
          <div className="project_wrapper">
            <div className="project_one_flex" data-aos="fade-up">
              <div className="project_one_img">
                <img src={img} alt="" />
              </div>
              <div className="project_one_text">
                <img src={logo} alt="" />
                <p>
                  This website is one of the best in my portfolio. My website is
                  built in Raect.js javascript library. This is my website using
                  RTK QUERY.
                </p>
                <Link
                  className="btn_project"
                  target="_blank"
                  to={"https://examen-7.vercel.app/"}
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="project_one_flex" data-aos="fade-up">
              <div className="project_one_img">
                <img src={img1} alt="" />
              </div>
              <div className="project_one_text">
                <img src={logo1} alt="" />
                <p>
                  In this project I used script type and Next.js and also used
                  additional libraries. One of the best projects in my type
                  scrit.
                </p>
                <Link
                  className="btn_project"
                  target="_blank"
                  to={"https://udevs-ten.vercel.app/"}
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
