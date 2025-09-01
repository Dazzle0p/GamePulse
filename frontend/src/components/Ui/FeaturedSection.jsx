import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { EffectFade, Navigation, Thumbs, Autoplay } from "swiper/modules";

export default function FeaturedSection({ tournaments = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative w-[90%] max-w-6xl my-8 mx-auto h-[600px]">
      {/* --- Main Swiper --- */}
      <Swiper
        modules={[EffectFade, Thumbs, Autoplay]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="h-full rounded-2xl"
      >
        {tournaments.map((tournament, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${tournament.image})` }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />

              {/* Text Overlay */}
              <div className="absolute left-16 bottom-20 text-white z-10">
                <p className="text-sm tracking-[2px] uppercase opacity-80">
                  {tournament.location}
                </p>
                <h1 className="text-5xl font-extrabold leading-tight uppercase mt-2">
                  {tournament.name}
                </h1>
                <p className="text-lg mt-2 font-semibold">
                  Prize Pool:{" "}
                  <span className="text-yellow-300">
                    {tournament.prizePool}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Thumbnail Swiper --- */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, Navigation]}
        slidesPerView={3.5}
        spaceBetween={25}
        loop
        watchSlidesProgress
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-[130px]"
      >
        {tournaments.map((tournament, index) => (
          <SwiperSlide
            key={index}
            className={`
              rounded-lg bg-cover bg-center cursor-pointer transition-all duration-300 ease-in-out
              opacity-50
              [&.swiper-slide-visible]:opacity-100
              [&.swiper-slide-thumb-active]:scale-110
              [&.swiper-slide-thumb-active]:border-4
              [&.swiper-slide-thumb-active]:border-white
            `}
            style={{ backgroundImage: `url(${tournament.image})` }}
          >
            <div className="w-full h-full bg-black/40 flex items-end justify-center p-3 rounded-lg">
              <p className="text-white font-semibold text-sm text-center">
                {tournament.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
