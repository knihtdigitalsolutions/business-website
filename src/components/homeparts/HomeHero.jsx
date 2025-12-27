import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
// import VantaDotsHeroVideo from "./HomeHeroVideo";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

// Floating particles for futuristic effect
const Particles = () => (
  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
    {[...Array(18)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full bg-cyan-400/30 blur-[2px]"
        style={{
          width: `${16 + Math.random() * 32}px`,
          height: `${16 + Math.random() * 32}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 60 - 30, 0],
          x: [0, Math.random() * 60 - 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6 + Math.random() * 6,
          repeat: Infinity,
          repeatType: "mirror",
          delay: Math.random() * 3,
        }}
      />
    ))}
  </div>
);

const HomeHero = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollTop = window.scrollY || window.pageYOffset;
      const offset = clamp(scrollTop, 0, window.innerHeight * 1.2);
      setScrollY(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax: move video and overlay slower than scroll
  const videoTranslate = scrollY * 0.18;
  const overlayOpacity = clamp(0.6 + scrollY / 900, 0.6, 0.95);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center w-full overflow-hidden"
    >
      {/* Content Glass Card */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6 mb-8"
        >
          <div className="relative">
            <span className="absolute -inset-2 rounded-full border-2 border-cyan-400/60 animate-pulse blur-[2px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/40 border border-cyan-200/30 dark:border-cyan-900/40 rounded-3xl px-8 py-6 shadow-2xl max-w-2xl text-center"
          >
            <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow mb-2">
              We are here to help. It is the CIA...
            </p>
            <p className="shadow-md p-5 shadow-cyan-200 text-3xl font-bold md:text-2xl text-amber-500 drop-shadow mb-0">
              Confidentiality, Integrity & Availability
            </p>
            <p className="text-lg md:text-2xl text-white/90 font-medium drop-shadow mt-2">
              ...triad that drives us to constantly improve
            </p>
          </motion.div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ArrowDownCircle
            size={48}
            className="text-cyan-200 animate-bounce drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
