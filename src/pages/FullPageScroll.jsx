import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../components/homeparts/HomeHero';
import HomeSectionWrapper from '../components/homeparts/HomeSectionWrapper';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import News from '../pages/News';
import Contact from '../pages/Contact';
import HomeSlider from '../components/homeparts/HomeSlider';
import ThreeDSection from '../components/ThreeDSection';


const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const FullPageScroll = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-cyan-200 via-gray-200 to-cyan-300 dark:from-gray-800 dark:via-yellow-700 dark:to-cyan-900">
      {/* Slider below navbar */}
      <div className="w-full z-50 mt-20">
        <HomeSlider />
      </div>

      {/* Hero Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="hero"
      >
        <HomeHero />
      </motion.section>

      {/* About Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="about"
      >
        <HomeSectionWrapper>
          <About isSummary={true} />
        </HomeSectionWrapper>
      </motion.section>

      {/* 3D Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="three-d"
      >
        <ThreeDSection />
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="services"
      >
        <HomeSectionWrapper>
          <Services isSummary={true} />
        </HomeSectionWrapper>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="portfolio"
      >
        <HomeSectionWrapper>
          <Portfolio isSummary={true} />
        </HomeSectionWrapper>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="news"
      >
        <HomeSectionWrapper>
          <News isSummary={true} />
        </HomeSectionWrapper>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="w-full min-h-screen flex items-center justify-center"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        id="contact"
      >
        <HomeSectionWrapper>
          <Contact isSummary={true} />
        </HomeSectionWrapper>
      </motion.section>
    </div>
  );
};

export default FullPageScroll;
