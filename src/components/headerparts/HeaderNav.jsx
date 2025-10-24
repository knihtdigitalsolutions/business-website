// components/GenericHeader.js
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { homeNavLinks } from "../../assets/constants/navlinks";
import DarkModeToggle from "../DarkModeToggle";
import { XCircle } from "lucide-react";
import { generalDarkBgColor, generalLightBgColor } from "../../assets/constants/colors";

const scrollToAnchor = (anchor) => {
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export const HomeHeaderNav = ({ style, navigate, heading='Kniht' }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (link) => {
        if (window.location.pathname === '/' && link.anchor) {
            scrollToAnchor(link.anchor);
        } else {
            navigate(link.path);
            setMobileMenuOpen(false);
            return;
        }
    };

    // Luxury nav style: floating, glassmorphic, minimal, animated underline
    return (
        <>
            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90vw] max-w-5xl rounded-2xl shadow-2xl bg-white/30 dark:bg-gray-900/60 backdrop-blur-lg border border-white/30 dark:border-cyan-900 flex items-center justify-between px-8 py-4"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
            >
                <Logo size={40} className="w-12 h-12 drop-shadow-lg" />
                <nav className="hidden lg:flex flex-wrap gap-8 items-center justify-center text-lg font-semibold tracking-wide">
                    {homeNavLinks.map((link, i) => (
                        <motion.button
                            key={link.name}
                            onClick={() => handleNav(link)}
                            className="relative px-3 py-1 text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition group bg-transparent"
                            whileHover={{ scale: 1.08 }}
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </motion.button>
                    ))}
                </nav>
                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-gray-800 dark:text-white"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* Dark mode button */}
                <div className="hidden lg:flex">
                    <DarkModeToggle />
                </div>
            </motion.header>
            {/* Mobile Menu - luxury glassmorphic style */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed h-full w-[80vw] max-w-xs lg:hidden right-0 top-0 z-[999] rounded-l-2xl bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl p-6 border-l border-cyan-200 dark:border-cyan-900"
                >
                    <div className="flex flex-col items-center p-4 gap-6 h-full">
                        <div className="flex justify-between w-full items-center mb-4">
                            <h3 className="text-2xl font-extrabold tracking-widest text-cyan-700 dark:text-cyan-300 uppercase">{heading}</h3>
                            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                                <XCircle className="w-7 h-7 text-cyan-700 dark:text-cyan-300" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 items-center w-full mt-8">
                            {homeNavLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleNav(link)}
                                    className="relative px-3 py-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition group bg-transparent w-full text-left"
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                                </motion.button>
                            ))}
                        </nav>
                        <div className="flex-1" />
                        <DarkModeToggle />
                    </div>
                </motion.div>
            )}
        </>
    );
};
// Admin Side Nav Header
export const AdminSideNavHeader = ({companyName}) => {
  return (
    <section className=" flex flex-col items-center gap-2 mt-5 mb-10 p-2 w-full">
      <img src="/logo.jpg" alt="" className="lg:w-20 lg:h-20 w-10 h-10 " />
      <h1
        className={`text-green-500 lg:inline-block hidden dark:text-green-300 lg:p-2 p-5 dark:rounded-md uppercase font-semibold transition-all  text-[12px] lg:text-[14px]`}
      >
        {companyName}
      </h1>
    </section>
  );
};