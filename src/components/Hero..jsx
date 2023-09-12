import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Slider from "./Slider";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen bg-slate-300 relative">
      <Navbar />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        // effect={"fade"}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        {Array(4)
          .fill(1)
          .map((_) => {
            return (
              <SwiperSlide>
                <Slider />
              </SwiperSlide>
            );
          })}
        ...
      </Swiper>
    </div>
  );
};

export default Hero;
