import React from "react";
import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection/HeroSection";
import "../components/slider/slider.js"
// import { Parallax } from 'react-parallax';
import Slider from "../components/slider/slider.js";
// import Marquee from "../components/Marquee/Marquee";


function Home() {
  return (
    <div>
      {/* <Marquee /> */}
      <HeroSection />
      {/* <Parallax strength={800} bgImage={cardimg} bgImageAlt="building"> */}
        <AboutUs />
      {/* </Parallax>
      <Parallax strength={800} bgImage={building} bgImageAlt="building"> */}
        {/* <Initiatives /> */}
       {<Slider/>}
      {/* </Parallax> */}
    </div>
  );
}

export default Home;
