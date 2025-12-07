import { motion } from "framer-motion";
import HomeSectionWrapper from "../components/homeparts/HomeSectionWrapper";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import News from "../pages/News";
import Contact from "../pages/Contact";
import HomeSlider from "../components/homeparts/HomeSlider";
import ThreeDSection from "../components/ThreeDSection";
import { ArrowBigDown } from "lucide-react";
import VantaDotsHeroVideo from "../components/homeparts/VantaDotsHeroVideo";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FullPageScroll = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Slider below navbar */}
      <div className="w-full p-10 mt-20">
        <p className="text-3xl font-bold text-center mb-6">
          Explore Our Cutting-Edge Solutions
        </p>
        <p className="text-md font-bold text-center mb-6 bg-linear-to-br from-cyan-200 via-gray-200 to-cyan-200 dark:from-cyan-600 dark:via-gray-700 dark:to-cyan-800 py-2 px-4 rounded-lg inline-block text-clip">
          Hover over the cube below,{" "}
          <ArrowBigDown className="inline-block ml-2 mb-1" /> and drag to the
          left.{" "}
        </p>
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
        <VantaDotsHeroVideo />
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
