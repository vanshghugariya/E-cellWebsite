import React, { useRef, useEffect } from "react";
import "./slider.css";

export default function Slider() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    // start auto slide
    runNextAuto = setTimeout(() => {
      nextSlide();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  const showSlider = (type) => {
    const carouselDom = carouselRef.current;
    const SliderDom = listRef.current;
    const thumbnailBorderDom = thumbnailRef.current;

    let SliderItemsDom = SliderDom.querySelectorAll(".item");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextSlide();
    }, timeAutoNext);
  };

  const nextSlide = () => showSlider("next");
  const prevSlide = () => showSlider("prev");

  return (
   
    <div className="carousel" ref={carouselRef}>
      {/* Main list */}
      <div className="list" ref={listRef}>
        <div className="item">
          <img src="/images/img1.png" alt="slide1" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">E'SUMMIT</div>
            <div className="topic">2K23</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="/images/img2.png" alt="slide2" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">SAARTHI</div>
            <div className="topic">2K23</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="/images/img3.png" alt="slide3" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">IPL</div>
            <div className="topic">AUCTION</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="/images/img4.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">E'SUMMIT</div>
            <div className="topic">2K24</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
       <div className="item">
          <img src="/images/img5.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">SHARK</div>
            <div className="topic">TANK</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/images/img6.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">STARTUP</div>
            <div className="topic">SHOWCASE</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/images/img7.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">STAND-UP</div>
            <div className="topic">COMEDY</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/images/img8.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">MUSIC</div>
            <div className="topic">CONCERT</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/images/img9.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">IDEATHON</div>
            <div className="topic">2K24</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/images/img10.png" alt="slide4" />
          <div className="content">
            <div className="author">EVENTS</div>
            <div className="title">FIRE-SIDE</div>
            <div className="topic">CHAT</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
              rem magnam nesciunt minima placeat, itaque eum neque officiis unde.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

      </div>

      {/* Thumbnails */}
      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <img src="/images/img1.png" alt="thumb1" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img2.png" alt="thumb2" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img3.png" alt="thumb3" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img4.png" alt="thumb4" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img5.png" alt="thumb4" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img6.png" alt="thumb4" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img7.png" alt="thumb4" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img8.png" alt="thumb4" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img9.png" alt="thumb4" />
          <div className="content">
            <div className="title"></div>
            
          </div>
        </div>
        <div className="item">
          <img src="/images/img10.png" alt="thumb4" />
          <div className="content">
            <div className="title">Name</div>
            
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="arrows">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>

      {/* Timer bar */}
      <div className="time" ref={timeRef}></div>
    </div>
  );
}

