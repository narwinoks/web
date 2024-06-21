import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 789);
  }, [width]);

  return <>{isMobile ? <NavbarMobile /> : <Navbar />}</>;
};

export default Header;
