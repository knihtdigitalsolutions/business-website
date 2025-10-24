import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useStatusContext } from '../../context/StatusContext';
import { usePersistedNavState } from '../../hooks/usePersistedNavState';

import { navItems } from '../../assets/constants/navlinks';
import { AdminSideNavHeader } from '../headerparts/HeaderNav';
import { AdminSideNavButton } from '../buttons/Buttons';

// import { NavFooter } from './Footer';

const AdminSideNa = ({}) => {
    const [activeTab, setActiveTab] = useState('slider');
    return (
        <div className="flex flex-col gap-4 mb-8">
            <div className=" flex flex-col gap-5 mb-8 mr-5">
                <button onClick={() => setActiveTab('slider')} className={`px-4 py-2 rounded ${activeTab==='slider'?'bg-sky-500 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Slider Settings</button>
                <button onClick={() => setActiveTab('blog')} className={`px-4 py-2 rounded ${activeTab==='blog'?'bg-sky-500 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Blog Manager</button>
                <button onClick={() => setActiveTab('theme')} className={`px-4 py-2 rounded ${activeTab==='theme'?'bg-sky-500 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Theme Settings</button>
            </div>
        </div>
    )
}

const AdminSideNav = ({ userRole = 'Admin', companyName = 'Kniht' }) => {
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
            className={`z-99 flex-shrink-0  p-4 sm:p-1 overflow-y-auto border-r-2 border-green-500 dark:bg-gray-800  dark:text-gray-100  text-gray-800 transition-all duration-300 min-h-screen`}
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

export default AdminSideNav