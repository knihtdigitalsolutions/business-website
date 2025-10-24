
import React from 'react';
import { motion } from 'framer-motion';

const News = ({ isSummary }) => {
  return (
    <motion.section
      className="relative py-16 md:py-24 px-2 sm:px-6 min-h-[60vh] rounded-3xl shadow-2xl overflow-hidden bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-cyan-300/30 dark:border-cyan-800/40"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
        style={{
          background: 'linear-gradient(120deg, rgba(255,0,255,0.10) 0%, rgba(0,0,0,0.08) 60%, #fff 100%)',
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
      {/* Neon Glow Border */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-fuchsia-400/40 blur-[2px] animate-pulse z-10" />
      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-fuchsia-400/20 blur-[2px]"
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
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-fuchsia-300 mb-6 drop-shadow-lg tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest News
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-fuchsia-100 font-medium leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Stay up to date with the latest news and updates from Kniht Technologies.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[{
            img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            title: 'New Office Launch',
            desc: 'We have opened a new office to better serve our clients.'
          }, {
            img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            title: 'Award Winner',
            desc: 'Kniht Technologies wins the 2025 Innovation Award.'
          }].map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative group bg-white/10 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-6 flex flex-col items-center border border-fuchsia-300/30 dark:border-fuchsia-800/40 backdrop-blur-xl overflow-hidden transition-transform duration-300 hover:scale-[1.04] hover:shadow-fuchsia-400/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 0 24px #e879f9' }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-fuchsia-400/30 opacity-0 group-hover:opacity-100 blur-[2px] animate-pulse transition-opacity duration-300" />
              <img src={item.img} alt={item.title} className="rounded-lg mb-4 w-full h-32 object-cover shadow-lg group-hover:shadow-fuchsia-400/30 transition-shadow" />
              <h4 className="text-lg font-bold mb-2 text-white drop-shadow-lg tracking-wide group-hover:text-fuchsia-200 transition-colors">{item.title}</h4>
              <p className="text-sm text-center text-fuchsia-100/90 group-hover:text-fuchsia-50 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default News;
