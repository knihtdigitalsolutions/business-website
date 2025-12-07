import React, { useEffect, useRef } from "react";
import HomeHero from "./HomeHero";

const VantaDotsHeroVideo = (props) => {
  // 1. Create a ref to attach to the target DOM element
  const vantaRef = useRef(null);

  // 2. Create a ref to store the Vanta instance for cleanup
  const vantaEffect = useRef(null);

  useEffect(() => {
    // 3. Ensure window.VANTA is available before trying to initialize
    if (vantaRef.current && window.VANTA) {
      // Check if we already initialized Vanta to avoid re-initialization
      if (!vantaEffect.current) {
        // 4. Initialize VANTA.DOTS
        vantaEffect.current = window.VANTA.WAVES({
          el: vantaRef.current, // Use the ref as the element selector
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // Add any custom colors or settings here
          // color: 0xcccccc
        });
      }
    }

    // 5. Cleanup function: Destroys the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };

    // The empty dependency array [] ensures this effect runs only once after the initial render
  }, []);
  console.log("Rendering VantaDotsHeroVideo");
  return (
    // 6. Attach the ref to the hero element where Vanta should be rendered
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "500px" }} // Give the container a size!
      className="hero-component-container relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
    >
      {/* Your hero content goes here */}
      <HomeHero />
    </div>
  );
};

export default VantaDotsHeroVideo;
// import React from 'react';

// const HomeHeroVideo = () => (
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
//     poster="/public/placeholder.svg"
//   >
//     <source src="/public/hero-bg.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// );

// export default HomeHeroVideo;
