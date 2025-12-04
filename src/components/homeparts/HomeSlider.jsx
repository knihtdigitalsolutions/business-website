import React, { useRef, useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Swiper CSS Imports (Ensure these are imported globally or via your module loader)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

// Placeholder imports for your images
import CyberSecurity from "../../assets/media/home-slider-cybersecurity.png";
import Ai from "../../assets/media/home-slider-ai.png";
import BlockChain from "../../assets/media/home-slider-transparency.png";
import WebMobileApp from "../../assets/media/home-slider-web-mobile-app.png";
import robot from "../../assets/friendly-robot.glb";
import { CharacterController } from "./CharacterController";

// --- Main Component (2D + 3D) ---

export default function InteractiveCube() {
  const cubeWrapperRef = useRef(null);

  return (
    // Outer wrapper for the animated background and centering
    <div className="flex items-center justify-center min-h-screen animate-tech-bg relative">
      {/* 2D Swiper Cube Component */}
      <div
        ref={cubeWrapperRef}
        className="relative z-10" // z-10 ensures the cube is on top of the default canvas content
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCube, Pagination]}
          className="mySwiper rounded-lg w-80 h-[670px] md:w-[500px]"
        >
          {[CyberSecurity, Ai, BlockChain, WebMobileApp].map(
            (imgSrc, index) => (
              <SwiperSlide key={index} className="bg-black/50">
                <img
                  src={imgSrc}
                  alt={`Slide ${index}`}
                  className="block w-full h-full object-cover"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* 3D R3F Canvas Component (Overlays the entire page) */}
      <div className="fixed top-50 right-5 w-[500px] h-[500px] pointer-events-none z-999">
        <Canvas camera={{ position: [5, 0, 0], fov: 75, near: 0.1, far: 1000 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />

          {/* Pass the Cube Ref to the 3D Character Controller */}
          <CharacterController targetRef={cubeWrapperRef} modelPath={robot} />
        </Canvas>
      </div>
    </div>
  );
}
