import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SpeakerSlider.css";

import b1 from "../../assets/background/b1.png";
import b2 from "../../assets/background/b2.png";
import b3 from "../../assets/background/b3.png";
import b4 from "../../assets/background/b4.png";
import b5 from "../../assets/background/b5.png";
import b6 from "../../assets/background/b6.png";
import b7 from "../../assets/background/b7.png";
import b8 from "../../assets/background/b8.png";
import b9 from "../../assets/background/b9.png";

const slides = [
  { bg: b1, title: "Project 1" },
  { bg: b2, title: "Project 2" },
  { bg: b3, title: "Project 3" },
  { bg: b4, title: "Project 4" },
  { bg: b5, title: "Project 5" },
  { bg: b6, title: "Project 6" },
  { bg: b7, title: "Project 7" },
  { bg: b8, title: "Project 8" },
  { bg: b9, title: "Project 9" },
];

export default function SpeakerSlider() {
  return (
    <div className="speaker-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        speed={800} // smooth transition
        className="speaker-swiper"
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 3 }, // desktop
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="custom-slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
