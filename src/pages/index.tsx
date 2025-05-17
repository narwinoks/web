import React, { useState } from 'react';

import Counter from '@/common/components/module/counter/Counter';
import About from '@/common/components/module/home/About';
import Blog from '@/common/components/module/home/Blog';
import Footer from '@/common/components/module/home/Footer';
import Info from '@/common/components/module/home/Info';
import Tech from '@/common/components/module/home/Tech';

const Index = () => {
  const [isTimeUp] = useState<boolean>(true);
  return (
    <>
      {isTimeUp ? (
        <>
          <Info />
          {/* <Gallery /> */}
          <About />
          <Blog />
          <Tech />
          <Footer />
        </>
      ) : (
        <Counter />
      )}
    </>
  );
};

export default Index;
