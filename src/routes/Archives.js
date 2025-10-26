import React from 'react'
// import Carousel from '../components/Carousel/Carousel'
import {startup1,startup2, associate1,associate2,associate3,associate4,associate5} from './startupdata'
import HorizontalCard from '../components/HorizontalCard/HorizontalCard'
import OurSponsors from '../components/OurSponsors'
// import { Parallax } from 'react-parallax';
// import building from '../assets/images/building.jpg'
// import cardimg from '../assets/images/cardimg.jpg'
import SpeakerSlider from '../components/SpeakerSlider/SpeakerSlider'



const Archives = () => {
  return (
    <div  style={{width: "100vw"}} className="archives">  
              <div className="abc">
                  <SpeakerSlider />
               </div>    
        {/* <div className='speakers'>
            <h1>Past Speakers</h1>
            <Carousel />
        </div> */}
        <div className='startup'>
          <h1>Start Up's</h1>
          <HorizontalCard {...startup2} />
          <></>
          <HorizontalCard {...startup1} />
        </div>
        <div className='associates'>
          <h1>Our Associates</h1>
          <HorizontalCard {...associate1} />
          <></>
          <HorizontalCard {...associate2} />
          <></>
          <HorizontalCard {...associate3} />
          <></>
          <HorizontalCard {...associate4} />
          <></>
          <HorizontalCard {...associate5} />
          </div>
          <div className='startup'>
            <div className='sponsors'>
              <h1>Past Sponsors</h1>
              <OurSponsors />
            </div>
          </div>
        </div>

  );
}

export default Archives
// import React from "react";
// import SpeakerSlider from "../components/SpeakerSlider/SpeakerSlider";

// function Archives() {
//   return (

//   );
// }

// export default Archives;
