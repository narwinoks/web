import React from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import { useWindowSize } from 'usehooks-ts';

const Header = () => {
  const { width } = useWindowSize();

  const isMobile = width < 789;

  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
    </>
  );
};

export default Header;
