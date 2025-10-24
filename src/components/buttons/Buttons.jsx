import React from 'react';
import { Menu, X, ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext'; // Import dark mode context
import { useStatusContext } from '../../context/StatusContext';

//dark mode
export const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <button
      onClick={() => toggleDark()}
      className=" mt-2 mb-2 p-2 rounded-md text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-600 hover:bg-green-500 dark:hover:bg-blue-500 dark:hover:text-white"
    >
      {/* {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />} */}
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

//SIDE NAV
//side nav toggle
export const SideNavToggleButton = ({ isSideNavOpen, setIsSideNavOpen }) => {
  return (
    <div className="relative group inline-block">
      <button
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        className={`${
          isSideNavOpen ? 'rounded-full' : 'left-2 rounded-md'
        } bg-green-500 text-white p-2 shadow-lg`}
        aria-label="Toggle Sidebar"
      >
        {isSideNavOpen ? (
          <ArrowLeftToLine className="w-5 h-5" />
        ) : (
          <ArrowRightFromLine className="w-6 h-6" />
        )}
      </button>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
        {isSideNavOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </div>
    </div>
  );
};
//Admin
//side nav link button for child and parent button
export const AdminSideNavButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isChild = false,
  isExpanded,
}) => {
  const { isSideNavOpen } = useStatusContext();

  return (
    <button
      onClick={onClick}
      className={`
            flex items-center gap-2 p-2 lg:p-3 mt-2 rounded-r-md transition-colors duration-200
            ${
              isActive
                ? 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-white font-bold border-l-4 border-green-500'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }
            ${isChild ? 'pl-3 text-sm' : 'text-base'}
        `}
    >
      <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
      <span
        className={`
            transition-all duration-200 hidden lg:inline-block
            ${isSideNavOpen ? 'inline opacity-100 ml-1' : 'opacity-0 w-0 overflow-hidden'}
            `}
      >
        {label}
      </span>
    </button>
  );
};