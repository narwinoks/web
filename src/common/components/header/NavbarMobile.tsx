import React, { useEffect, useState } from 'react';

import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import ThemeToggleButton from '../elements/ThemeToggleButton';
const NavbarMobile = () => {
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandMenu]);
  return (
    <>
      <div className="relative flex items-center justify-between border-b border-light px-2 pb-5 text-center shadow-md">
        <MobileMenuButton
          expandMenu={expandMenu}
          setExpandMenu={setExpandMenu}
        />
        <ThemeToggleButton />
        {expandMenu && (
          <div className="absolute left-0 top-full z-10 h-screen w-full border border-gray-200 bg-light dark:bg-dark">
            <MobileMenu setExpandMenu={setExpandMenu}></MobileMenu>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarMobile;
