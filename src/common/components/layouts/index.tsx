import React, { ReactNode, useEffect, useState } from 'react';

import { counter } from '@/common/constant/counter';

import Header from '../header/Header';
import Counter from '../module/counter';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [isTimeUp, setIsTimeUp] = useState(false);
  useEffect(() => {
    const targetTime = new Date(counter.time).getTime();
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    if (difference > 0) {
      setIsTimeUp(true);
      const interval = setInterval(() => {
        const updatedCurrentTime = new Date().getTime();
        const updatedDifference = targetTime - updatedCurrentTime;
        if (updatedDifference <= 0) {
          setIsTimeUp(false);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsTimeUp(false);
    }
  }, []);

  return (
    <>
      {isTimeUp && <Counter></Counter>}
      {!isTimeUp && <Header></Header>}
      {!isTimeUp && (
        <main className="mx-4 my-10 lg:mx-auto lg:my-20">{children}</main>
      )}
    </>
  );
};

export default Layout;
