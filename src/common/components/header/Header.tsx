import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import { useWindowSize } from 'usehooks-ts';

const Header = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 789);
  }, [width]);

  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
    </>
  );
};

export default Header;
