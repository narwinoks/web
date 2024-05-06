import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import ThemeToggleButton from '../elements/ThemeToggleButton'
import MobileMenuButton from './MobileMenuButton';
import useIsMobile from '@/common/hooks/useIsMobile';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
const NavbarMobile = () => {
  const [expandMenu, setExpandMenu] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const hideNavbar = () => {
    setExpandMenu(false);
  };

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
      <div className='flex relative justify-between px-2 shadow-md text-center items-center border-b pb-5 border-light'>
        <MobileMenuButton expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
        <ThemeToggleButton />
        {expandMenu && (
          <div className='absolute top-full left-0 w-full dark:bg-dark bg-light border border-gray-200 z-10 h-screen'>
            <MobileMenu setExpandMenu={setExpandMenu}></MobileMenu>
          </div>
        )}
      </div>

    </>
  )
}

export default NavbarMobile