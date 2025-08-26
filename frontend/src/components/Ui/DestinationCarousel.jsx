// src/components/DestinationCarousel.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { EffectFade, Navigation, Thumbs, Autoplay } from "swiper/modules";
import s8ulbg from "../../assets/s8ulBg.webp";

const destinations = [
  {
    location: "Saint Antönien",
    country: "Switzerland and Alps",
    image: s8ulbg,
  },
  {
    location: "Nagano Prefecture",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070",
  },
  {
    location: "Wadi Rum",
    country: "Jordan",
    image: s8ulbg,
  },
  {
    location: "Kaesong",
    country: "North Korea",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070",
  },
  {
    location: "Los Glaciares",
    country: "Argentina",
    image: s8ulbg,
  },
];

export default function DestinationCarousel() {
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
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />

              {/* Text Overlay */}
              <div className="absolute left-16 bottom-20 text-white z-10">
                <p className="text-sm tracking-[2px] uppercase opacity-80">
                  {dest.country}
                </p>
                <h1 className="text-6xl font-extrabold leading-tight uppercase mt-2">
                  {dest.location}
                </h1>
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
        {destinations.map((dest, index) => (
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
            style={{ backgroundImage: `url(${dest.image})` }}
          >
            <div className="w-full h-full bg-black/40 flex items-end justify-center p-3 rounded-lg">
              <p className="text-white font-semibold text-sm text-center">
                {dest.location}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
