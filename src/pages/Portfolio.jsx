import React from 'react'

import { motion } from 'framer-motion';
import { Globe, MonitorSmartphone, Server, Users } from 'lucide-react';
import { Layout } from '../layouts/Layout';


const Portfolio = () => {
  return (
    <motion.section
      className="relative py-16 md:py-24 px-2 sm:px-6 min-h-[60vh] bg-gradient-to-br from-cyan-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-200 via-transparent to-transparent dark:from-cyan-900" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-700 dark:text-cyan-300 mb-6 drop-shadow-lg tracking-tight">
          Our Portfolio
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-10">
          Explore some of our recent projects and collaborations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full">
          {/* Portfolio Cards - glass, neon, animated */}
          {[{
            icon: Globe,
            title: 'Global Reach',
            desc: 'Projects delivered worldwide.'
          }, {
            icon: MonitorSmartphone,
            title: 'Mobile Solutions',
            desc: 'Innovative mobile apps for various industries.'
          }, {
            icon: Server,
            title: 'Cloud Services',
            desc: 'Robust cloud infrastructure and hosting.'
          }, {
            icon: Users,
            title: 'Team Collaboration',
            desc: 'Working with talented teams and partners.'
          }].map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative group bg-white/10 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-cyan-300/30 dark:border-cyan-800/40 backdrop-blur-xl overflow-hidden transition-transform duration-300 hover:scale-[1.07] hover:shadow-cyan-400/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 0 32px #00fff7' }}
            >
              {/* Neon Glow Border */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 blur-[2px] animate-pulse transition-opacity duration-300" />
              <item.icon size={48} className="text-cyan-400 drop-shadow-glow mb-3 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg tracking-wide group-hover:text-cyan-200 transition-colors">{item.title}</h3>
              <p className="text-base text-center text-cyan-100/90 group-hover:text-cyan-50 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Demo Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {[{
            img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
            title: 'Mobile App Demo',
            desc: 'A showcase of our mobile app development capabilities.'
          }, {
            img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
            title: 'Cloud Project',
            desc: 'Our cloud infrastructure powering client solutions.'
          }].map((demo, idx) => (
            <motion.div
              key={demo.title}
              className="relative group bg-white/10 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-6 flex flex-col items-center border border-cyan-300/30 dark:border-cyan-800/40 backdrop-blur-xl overflow-hidden transition-transform duration-300 hover:scale-[1.04] hover:shadow-cyan-400/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 0 24px #00fff7' }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 blur-[2px] animate-pulse transition-opacity duration-300" />
              <img src={demo.img} alt={demo.title} className="rounded-lg mb-4 w-full h-32 sm:h-40 object-cover shadow-lg group-hover:shadow-cyan-400/30 transition-shadow" />
              <h4 className="text-lg font-bold mb-2 text-white drop-shadow-lg tracking-wide group-hover:text-cyan-200 transition-colors">{demo.title}</h4>
              <p className="text-sm text-center text-cyan-100/90 group-hover:text-cyan-50 transition-colors">{demo.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
