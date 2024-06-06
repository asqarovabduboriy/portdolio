import React from "react";
import "./About.css";

const About = () => {
  let skils = ['html',"css",'sass','js','react.js','git','bootstrap','tailwind','typescript','netx.js']
  let skills = skils.map((skill,i) => <div className="skill_div" key={i}>{skill}</div>)
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="text_about">
            <h1>About Me</h1>
            <div className="underline"></div>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>

          <div className="flex_about">
            <div className="about_me">
              <h2>Get to know me!</h2>
              <p>
                I am a frontend developer. I deal with the front end of websites
                and web applications. Check out this portfolio to learn more
                about me!
              </p>
              <p>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
              <button className="btn_about">Contact</button>
            </div>
            <div className="skills">
              <h2>My Skills</h2>
               <div className="skkils_container">
                 {skills}
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
