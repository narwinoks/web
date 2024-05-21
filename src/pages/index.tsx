import Counter from '@/common/components/module/counter/Counter';
import About from '@/common/components/module/home/About';
import Blog from '@/common/components/module/home/Blog';
import Footer from '@/common/components/module/home/Footer';
import Gallery from '@/common/components/module/home/Gallery';
import Info from '@/common/components/module/home/Info';
import Tech from '@/common/components/module/home/Tech';
import { counter } from '@/common/constant/counter';
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  useEffect(() => {
    const difference = +new Date(counter.time) - +new Date();
    const timer = setTimeout(() => {
      setIsTimeUp(true);
    }, difference);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isTimeUp ? (
        <>
          <Info />
          <Gallery />
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
