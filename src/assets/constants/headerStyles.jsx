// HeaderStyles.js
import { motion } from "framer-motion";

const headerStyles = [
  {
    label: 'Glassmorphism',
    headerProps: {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg flex items-center justify-between px-8 py-4",
    },
    logoClassName: "w-auto max-w-xs",
    navLinkClassName: "flex items-center gap-2 text-black dark:text-white hover:text-yellow-400 transition font-medium px-3 py-1 rounded-lg hover:bg-white/10",
    showIcons: true,
  },
  {
    label: 'Gradient Bar',
    headerProps: {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 shadow-xl flex items-center justify-between px-8 py-4",
    },
    logoClassName: "w-auto max-w-xs",
    navLinkClassName: "relative text-black dark:text-white  font-medium px-3 py-1 group",
    showIcons: false,
    navLinkHoverEffect: (
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    ),
  },
  {
    label: 'Icon Navigation',
    headerProps: {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      className: "fixed top-0 left-0 w-full z-50 bg-black/80 shadow-lg flex items-center justify-between px-8 py-4",
    },
    logoClassName: "w-auto max-w-xs",
    navLinkClassName: "flex flex-col items-center text-black dark:text-white  hover:text-fuchsia-400 transition",
    showIcons: true,
    navLinkTextClassName: "text-xs mt-1",
  },
  {
    label: 'Animated Entry',
    headerProps: {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: 'spring', stiffness: 80 },
      className: "fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-2xl flex items-center justify-between px-8 py-4",
    },
    logoClassName: "w-auto max-w-xs",
    navLinkClassName: "text-black dark:text-white font-semibold px-3 py-1 rounded-lg hover:bg-indigo-100/40 dark:hover:bg-indigo-100/40 hover:text-gray-900 dark:hover:text-gray-100 transition",
    navLinkProps: (i) => ({
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 + i * 0.1 },
    }),
  },
];

export { headerStyles };