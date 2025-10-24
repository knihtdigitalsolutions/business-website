import React from 'react';

const HomeHeroVideo = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
    poster="/public/placeholder.svg"
  >
    <source src="/public/hero-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default HomeHeroVideo;
