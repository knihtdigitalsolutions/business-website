import { motion } from "framer-motion";
import Logo from "./Logo";
import { homeNavLinks } from "../../assets/constants/navlinks";
const headerStyles = [
  {
    label: 'Glassmorphism',
    component: (
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg flex items-center justify-between px-8 py-4"
      >
        <Logo className="w-auto max-w-xs" />
        <nav className="flex gap-8">
          {homeNavLinks.map(link => (
            <a key={link.id} href={link.href} className="flex items-center gap-2 text-white/90 hover:text-yellow-400 transition font-medium px-3 py-1 rounded-lg hover:bg-white/10">
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>
      </motion.header>
    ),
  },
  {
    label: 'Gradient Bar',
    component: (
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 shadow-xl flex items-center justify-between px-8 py-4"
      >
        <Logo className="w-auto max-w-xs" />
        <nav className="flex gap-8">
          {homeNavLinks.map(link => (
            <a key={link.name} href={link.href} className="relative text-white font-medium px-3 py-1 group">
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>
      </motion.header>
    ),
  },
  {
    label: 'Icon Navigation',
    component: (
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/80 shadow-lg flex items-center justify-between px-8 py-4"
      >
        <Logo className="w-auto max-w-xs" />
        <nav className="flex gap-8">
          {homeNavLinks.map(link => (
            <a key={link.name} href={link.href} className="flex flex-col items-center text-white hover:text-fuchsia-400 transition">
              {link.icon}
              <span className="text-xs mt-1">{link.name}</span>
            </a>
          ))}
        </nav>
      </motion.header>
    ),
  },
  {
    label: 'Animated Entry',
    component: (
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-2xl flex items-center justify-between px-8 py-4"
      >
      <motion.div 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }} 
        className="w-auto max-w-xs"
      >
        <Logo className="w-auto" />
      </motion.div>
        <nav className="flex gap-8">
          {homeNavLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-indigo-900 font-semibold px-3 py-1 rounded-lg hover:bg-indigo-100/40 hover:text-fuchsia-600 transition"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </motion.header>
    ),
  },
];
export { headerStyles };