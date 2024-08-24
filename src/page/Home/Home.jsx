import React, { useEffect } from "react";
import About from "../../components/about/About";
import Project from "../../components/project/Project";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="container text-center" data-aos="fade-up">
          <h1>HEY, I'M ABDUBORIY</h1>
          <p>
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
          <a href="#project">
            <button>Project</button>
          </a>
        </div>
      </div>

      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
