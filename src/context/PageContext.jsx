import { createContext, useContext, useState, useEffect } from 'react';

const PageContext = createContext({});

export const PageProvider = ({ children }) => {
  //state for checking if a page is being displayed on the home page 
  // or not
  const [isHome, setIsHome] = useState(false);
//   if(window.location.pathname === '/home') {
//     setIsHome(true);
//   }
  return (
    <PageContext.Provider
      value={{
        isHome,
        setIsHome,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
export const usePageContext = () => {
  return useContext(PageContext);
};
export default PageContext;
