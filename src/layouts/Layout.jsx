import React from 'react';
import { motion } from 'framer-motion';
import { usePageContext } from '../context/PageContext';
import { useDarkMode } from '../context/DarkModeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminNav from '../components/adminparts/AdminNav';
import AdminSideNav from '../components/adminparts/AdminSideNav';
import { Outlet } from 'react-router-dom';
import { footerData, mockYoutubeData } from '../assets/constants/companycontent';

/**
 * The main Footer component, accepting appearance and data props.
 * @param {footerData} props.data - The complete data object to render.
 * @param {mockYoutubeData} props.data - The complete data object to render.
 */

export const Layout = ({ children }) => {
  const {isDark} = useDarkMode();
  const { isHome } = usePageContext(); // Use the context to determine the page type

  // Define dynamic properties based on the 'isHome' state
  const containerType = isHome ? 'div' : 'section'; // Use a div for 'home' and a section for other pages
  const motionProps = isHome
    ? {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1 },
        className: ''
      }
    : {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: `w-full pt-[50px]`
      };
    
  const data = {
    footerData,
    mockYoutubeData
  }
  // Render the motion component with dynamic props
  return (
    <>
      <Header businessName="KNiHT Digital Solutions" />
      <motion.div as={containerType} {...motionProps}>
        {/* Render children if directly used, otherwise render nested route content */}
        {/* {children} */}
        <Outlet />
      </motion.div>
      <Footer 
        isDark={isDark} 
        data={data}
        businessName="KNiHT Digital Solutions"
      />
    </>
  );
};

export const AdminLayout = ({ children }) => {
  const { isDark } = useDarkMode();
  // Responsive row layout for side nav and content
  return (
    <div className="w-full min-h-screen flex flex-row bg-gradient-to-br from-gray-100 via-green-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 text-black dark:text-white">
      {/* Side Navigation */}
      <div className="hidden md:block min-w-[210px] max-w-[260px] border-r-2 border-green-500 bg-white/80 dark:bg-gray-900/80">
        <AdminSideNav />
      </div>
      {/* Mobile SideNav Drawer */}
      <div className="md:hidden fixed z-50 left-0 top-0 h-full">
        <AdminSideNav />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen p-2 sm:p-4 md:p-8">
        <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 rounded-b-xl shadow-md mb-4">
          <AdminNav />
        </div>
        <main className="flex-1 w-full rounded-xl bg-white/90 dark:bg-gray-800/80 shadow-lg p-2 sm:p-6 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
// export default Layout
