// usePersistedNavState.js
import { useEffect, useState } from 'react';

export const usePersistedNavState = (userRole, navItems, setOpenSections) => {
  const [activeParent, setActiveParent] = useState(null);
  const [activeChild, setActiveChild] = useState(null);

  useEffect(() => {
    const savedComponent = localStorage.getItem('activeComponent');
    if (!savedComponent) return;

    const items = navItems[userRole] || [];
    items.forEach(item => {
      if (item.component === savedComponent) {
        setActiveParent(savedComponent);
        setActiveChild(null);
        setOpenSections(prev => ({ ...prev, [item.label]: true }));
      } else if (item.children) {
        item.children.forEach(child => {
          if (child.component === savedComponent) {
            setActiveParent(item.component);
            setActiveChild(child.component);
            setOpenSections(prev => ({ ...prev, [item.label]: true }));
          }
        });
      }
    });
  }, [userRole, navItems]);

  return { activeParent, setActiveParent, activeChild, setActiveChild };
};
