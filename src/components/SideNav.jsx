import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useStatusContext } from '../context/StatusContext';
import { usePersistedNavState } from '../hooks/usePersistedNavState';

import { navItems } from '../assets/constants/navlinks';
import { AdminSideNavHeader } from './headerparts/HeaderNav';
import { AdminSideNavButton } from './buttons/Buttons';

// import { NavFooter } from './Footer';

const SideNav = ({ userRole = 'Admin', companyName = 'Kniht' }) => {
    const {
        isSideNavOpen,
        setIsSideNavOpen,
        setActiveComponent,
        setOpenPrintingPage,
        setOpenPatList,
    } = useStatusContext();

    const [openSections, setOpenSections] = useState({});
    const { activeParent, setActiveParent, activeChild, setActiveChild } = usePersistedNavState(
        userRole,
        navItems,
        setOpenSections
    );

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1100) {
            setIsSideNavOpen(true);
        }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSideNavOpen]);

  const handleActiveLink = (component, isChild = false, parent = null) => {
    localStorage.setItem('activeComponent', component);
    setActiveComponent(component);
    if (isChild) {
      setActiveParent(parent);
      setActiveChild(component);
    } else {
      setActiveParent(component);
      setActiveChild(null);
    }
  };

  const handleToggleSection = label => {
    setOpenSections(prev => {
      const isOpen = prev[label];
      return { ...(isOpen ? {} : { [label]: true }) };
    });
  };

  const roleNavItems = navItems[userRole] || [];

  return (
    <>
      {/* Overlay on small screens */}
      <AnimatePresence>
        {isSideNavOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className={`z-99 w-[90px]  lg:w-[210px] flex-shrink-0  p-4 sm:p-1 overflow-y-auto border-r-2 border-green-500 dark:bg-gray-800  dark:text-gray-100  text-gray-800 transition-all duration-300 min-h-screen`}
          >
            <AdminSideNavHeader companyName={companyName}/>
            <hr className="border-t-2 border-green-500 dark:border-gray-300 my-2" />

            <nav className="flex flex-col gap-3 sm:gap-2 mt-6">
              {roleNavItems.map(item => (
                <div key={item.component} className="relative">
                  <AdminSideNavButton
                    label={item.label}
                    icon={item.icon}
                    onClick={() => {
                      handleActiveLink(item.component);
                      handleToggleSection(item.label);
                      if (item.label === 'Lab') {
                        setOpenPrintingPage(false);
                        setOpenPatList(true);
                      }
                    }}
                    isActive={activeParent === item.component}
                    isExpanded
                  />

                  {item.children && openSections[item.label] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="ml-4 mt-1"
                    >
                      {item.children.map(child => (
                        <SideNavButton
                          key={child.component}
                          label={child.label}
                          icon={child.icon}
                          onClick={() => handleActiveLink(child.component, true, item.component)}
                          isActive={
                            activeParent === item.component && activeChild === child.component
                          }
                          isChild
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <hr className="mt-4 mb-5 border-t-2 border-green-500 dark:border-gray-300" />
            {/* <NavFooter /> */}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNav