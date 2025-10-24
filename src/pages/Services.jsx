import React from 'react'

import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Lightbulb } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { services } from '../assets/constants/companycontent';


const Services = ({ isSummary }) => {
  return (
    <motion.section
      className="relative py-16 md:py-24 px-2 sm:px-6 min-h-[60vh] bg-gradient-to-br from-green-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-200 via-transparent to-transparent dark:from-cyan-900" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-cyan-300 mb-6 drop-shadow-lg tracking-tight">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-10">
          Kniht Technologies offers a range of services to help your business thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative group bg-white/10 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-cyan-300/30 dark:border-cyan-800/40 backdrop-blur-xl overflow-hidden transition-transform duration-300 hover:scale-[1.07] hover:shadow-cyan-400/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 0 32px #00fff7' }}
            >
              {/* Neon Glow Border */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 blur-[2px] animate-pulse transition-opacity duration-300" />
              <service.icon size={48} className="text-cyan-400 drop-shadow-glow mb-3 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg tracking-wide group-hover:text-cyan-200 transition-colors">{service.title}</h3>
              <p className="text-base text-center text-cyan-100/90 group-hover:text-cyan-50 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Demo Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {[{
            img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
            title: 'Demo Project',
            desc: 'A showcase of our consultancy and development expertise.'
          }, {
            img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            title: 'Security Audit',
            desc: 'Our cyber security team in action, protecting client assets.'
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

export default Services;