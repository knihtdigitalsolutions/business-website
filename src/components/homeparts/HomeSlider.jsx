import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS Imports (Ensure these are imported globally or via your module loader)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import { slides } from "../../assets/constants/slides";
// no 3D model here — simplified, responsive slider UI

// --- Main Component (2D + 3D) ---

export default function InteractiveCube() {
  const cubeWrapperRef = useRef(null);
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    // Outer wrapper for the animated background and centering
    <div className="flex rounded-2xl items-center justify-center min-h-screen animate-tech-bg relative">
      {/* 2D Swiper Cube Component */}
      <div
        ref={cubeWrapperRef}
        className="relative z-10 p-5"
        onMouseEnter={() => {
          setIsHovering(true);
          swiperRef.current?.autoplay?.stop();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          swiperRef.current?.autoplay?.start();
        }}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect={"cube"}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCube, Pagination, Autoplay]}
          speed={800}
          className="mySwiper rounded-lg w-64 sm:w-80 md:w-125 h-105 md:h-167.5 shadow-xl overflow-hidden"
        >
          {slides.map((s, index) => (
            <SwiperSlide key={index} className="relative bg-gray-900">
              {s.link ? (
                <>
                  <img
                    src={s.src}
                    alt={s.title || `Slide ${index}`}
                    className="block w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute left-4 bottom-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {s.title}
                    </h3>
                    {s.subtitle && (
                      <p className="text-sm md:text-base opacity-90">
                        {s.subtitle}
                      </p>
                    )}
                    {s.cta && (
                      <a href={s.link} className="block w-full h-full">
                        <span className="inline-block mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm">
                          {s.cta}
                        </span>
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={s.src}
                    alt={s.title || `Slide ${index}`}
                    className="block w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute left-4 bottom-6 text-white">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {s.title}
                    </h3>
                    {s.subtitle && (
                      <p className="text-sm md:text-base opacity-90">
                        {s.subtitle}
                      </p>
                    )}
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
