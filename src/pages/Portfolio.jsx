import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { portfolioContent } from "../assets/constants/companycontent";

const Portfolio = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = (idx) => {
    navigate(`${idx}`);
  };
  return (
    <motion.section
      className="relative py-16 md:py-24 px-2 sm:px-6 min-h-[60vh] bg-linear-to-br from-cyan-200 via-amber-200 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-linear-to-br from-cyan-200 via-transparent to-amber-200 dark:from-cyan-900 dark:via-amber-800 dark:to-cyan-900" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-700 dark:text-cyan-200 mb-6 drop-shadow-lg tracking-tight">
          Our Portfolio
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-cyan-100 font-medium leading-relaxed mb-10">
          Explore some of our recent projects and collaborations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 w-full">
          {/* Portfolio Cards - glass, neon, animated */}
          {portfolioContent.map((item, idx) => (
            <motion.div
              key={item.title}
              // onClick={() => handlePortfolioClick(item?.link)}
              className="relative group bg-white/10 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-cyan-300/30 dark:border-cyan-800/40 backdrop-blur-xl overflow-hidden transition-transform duration-300 hover:scale-[1.07] hover:shadow-cyan-400/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 0 32px #00fff7" }}
            >
              {/* Neon Glow Border */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 blur-[2px] animate-pulse transition-opacity duration-300" />
              <item.icon
                size={48}
                className="text-cyan-400 drop-shadow-glow mb-3 group-hover:animate-pulse"
              />
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-32 object-cover shadow-lg group-hover:shadow-cyan-400/30 transition-shadow"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-cyan-200 drop-shadow-lg tracking-wide hover:text-cyan-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-base text-center text-cyan-900 dark:text-cyan-200 hover:text-cyan-500 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
