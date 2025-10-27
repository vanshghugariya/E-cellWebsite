import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Typewriter from "typewriter-effect";
// import hero from "../../assets/images/hero.gif";
import Spline from '@splinetool/react-spline';


const HeroSection = () => {
  return (
    <div className="main">
      <div className="overlay">
        
        
      </div>
      
      <div className="herowrapper">
        <div className="content">
          <h3 className="title">Welcome To</h3>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                repeat: 1,
                delay: 60,
                strings: ["ENTREPRENEURSHIP CELL"],
              }}
            />
          </h1>
          <h2 className="titleTwo">Medi-Caps University</h2>
          <h3 className="titleThree">
            <span>Ideate &#10022; </span>
            <span>Initiate &#10022; </span>
            <span>Innovate</span>
          </h3>
          <Link to="/register">
            <button className="btn">Enroll Now</button>
          </Link>
        </div>
        <div className="heroImg">
          {/* <img src={hero} alt="hero" /> */}
           {/* <Spline scene="https://prod.spline.design/CmltLJOLng3CmrvN/scene.splinecode" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
