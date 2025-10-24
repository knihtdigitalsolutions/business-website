import React from 'react';
import { motion } from 'framer-motion';

// SectionTransition: 3D-like animated divider between sections
const SectionTransition = ({ direction = 'down', color = '#00fff7' }) => {
  // direction: 'down' (default) or 'up'
  const rotate = direction === 'down' ? '0deg' : '180deg';
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'down' ? -40 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full h-24 md:h-32 overflow-hidden flex items-center justify-center z-40"
      style={{ transform: `rotate(${rotate})` }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill={color}
          fillOpacity="0.13"
        />
        <path
          d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill={color}
          fillOpacity="0.18"
        />
      </svg>
    </motion.div>
  );
};

export default SectionTransition;
