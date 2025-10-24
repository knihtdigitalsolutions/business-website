import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultSlides = [
  {
    title: 'Innovate with Us',
    description: 'Empowering your business with cutting-edge digital solutions.',
    image: 'https://images.unsplash.com/photo-1573164713919-cb934e8b0a70?auto=format&fit=crop&q=80',
  },
  {
    title: 'Web & Mobile Development',
    description: 'Custom applications tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1549490349-86433620165b?auto=format&fit=crop&q=80',
  },
  {
    title: 'Cyber Security',
    description: 'Protect your business with our security solutions.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee9812?auto=format&fit=crop&q=80',
  },
];

const transitionVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
};

const HomeSlider = ({ 
  slides = defaultSlides, 
  transitionType = 'fade', 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(transitionType);
  
  React.useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearTimeout(timer);
  }, [current, autoPlay, autoPlayInterval, slides.length]);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative top-18 w-full max-w-screen mx-auto rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={transitionVariants[transition].initial}
          animate={transitionVariants[transition].animate}
          exit={transitionVariants[transition].exit}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center p-8 min-h-[320px]"
        >
          <img src={slides[current].image} alt={slides[current].title} className="w-full h-[300px] object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold text-sky-500 mb-2 text-center">{slides[current].title}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-4">{slides[current].description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <button onClick={handlePrev} className="bg-sky-500 text-white rounded-full p-2 shadow hover:bg-sky-600 transition">
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <button onClick={handleNext} className="bg-sky-500 text-white rounded-full p-2 shadow hover:bg-sky-600 transition">
          &#8594;
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-sky-500' : 'bg-gray-400 dark:bg-gray-700'} border border-white`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
        <select
          value={transition}
          onChange={e => setTransition(e.target.value)}
          className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded px-2 py-1 text-xs"
        >
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
      </div>
    </div>
  );
};

export default HomeSlider;
