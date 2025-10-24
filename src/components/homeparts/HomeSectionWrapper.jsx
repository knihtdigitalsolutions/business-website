
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

// Floating particles for section
const SectionParticles = () => (
  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute rounded-full bg-cyan-400/20 blur-[2px]"
        style={{
          width: `${10 + Math.random() * 18}px`,
          height: `${10 + Math.random() * 18}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 30 - 15, 0],
          x: [0, Math.random() * 30 - 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8 + Math.random() * 6,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const HomeSectionWrapper = ({ id, children, className = '' }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      // Parallax offset based on section position
      const offset = clamp(scrollTop - rect.top, 0, 120);
      setScrollY(offset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallax = scrollY * 0.12;

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`relative py-10 px-2 sm:px-8 rounded-3xl shadow-2xl mx-auto max-w-5xl mb-16 overflow-hidden ${className}`}
      style={{
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        border: '1.5px solid rgba(0,255,255,0.13)',
        transform: `translateY(${parallax}px)`
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
        style={{
          background: 'linear-gradient(120deg, rgba(0,255,255,0.10) 0%, rgba(0,0,0,0.08) 60%, #fff 100%)',
        }}
        animate={{
          backgroundPosition: [
            '0% 0%',
            '100% 100%',
            '0% 0%'
          ]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Futuristic Floating Particles */}
      <SectionParticles />
      <div className="relative z-20">
        {children}
      </div>
    </motion.section>
  );
};

export default HomeSectionWrapper;