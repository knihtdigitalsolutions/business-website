import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { MapPin, Phone, Mail } from 'lucide-react';
// import { Layout } from '../layouts/Layout';

const Contact = ({ isSummary = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Replace with your actual backend endpoint
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      setStatus('Message sent successfully! Thanks for reaching out.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  // Modern, animated Contact section
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
      {/* Neon Glow Border */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/40 blur-[2px] animate-pulse z-10" />
      {/* Floating Particles */}
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
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6 drop-shadow-lg tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-cyan-100 font-medium leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Get in touch with us for a consultation or to learn more about our services.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Contact Form */}
          <motion.div
            className="relative group bg-white/10 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-cyan-300/30 dark:border-cyan-800/40 backdrop-blur-xl overflow-hidden transition-transform duration-300 hover:scale-[1.04] hover:shadow-cyan-400/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: '0 0 24px #00fff7' }}
          >
            <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 blur-[2px] animate-pulse transition-opacity duration-300" />
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-base bg-white dark:bg-gray-900"
                required
                whileFocus={{ borderColor: '#00fff7', boxShadow: '0 0 8px #00fff7' }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-base bg-white dark:bg-gray-900"
                required
                whileFocus={{ borderColor: '#00fff7', boxShadow: '0 0 8px #00fff7' }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-base bg-white dark:bg-gray-900"
                rows={5}
                required
                whileFocus={{ borderColor: '#00fff7', boxShadow: '0 0 8px #00fff7' }}
              />
              <motion.button
                type="submit"
                className="bg-cyan-600 text-white p-3 rounded-md hover:bg-cyan-700 transition-colors text-base w-full font-semibold shadow"
                whileHover={{ scale: 1.04, boxShadow: '0 0 16px #00fff7' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
            {status && <p className="mt-4 text-center text-sm">{status}</p>}
          </motion.div>
          {/* Map & Info */}
          {!isSummary && (
            <motion.div
              className="space-y-4 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Google Maps Embed */}
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="KNIHT Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363155042!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Tech%20Lane%2C%20Innovation%20City%2C%2045678!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Contact Info */}
              <div className="space-y-2 bg-white/60 dark:bg-gray-900/60 rounded-xl p-4 shadow-lg w-full">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="mr-2 text-cyan-400" />
                  <p className="text-cyan-100">123 Tech Lane, Innovation City, 45678</p>
                </div>
                <div className="flex items-center mb-2">
                  <Phone size={20} className="mr-2 text-cyan-400" />
                  <p className="text-cyan-100">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-2 text-cyan-400" />
                  <p className="text-cyan-100">info@knihttechnologies.com</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;