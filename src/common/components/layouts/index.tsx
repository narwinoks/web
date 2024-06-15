import React, { ReactNode, useEffect, useState } from 'react'
import Header from '../header/Header';
import { useRouter } from 'next/router';
import { counter } from '@/common/constant/counter';
import Counter from '../module/counter';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pageName = router.pathname.split('/')[1];
  const isFullPageHeader =
    pageName === 'login' ||
    pageName === 'dashboard';
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
    console.log(isTimeUp);
    
  return (
    <>
      {
        isTimeUp && <Counter></Counter>
      }
      {
        !isTimeUp && <Header></Header>
      }
      {
        !isTimeUp && 
        <main className='lg:mx-auto lg:my-20 my-10 mx-4'>
          {children}
        </main>
      }
    </>
  )
}

export default Layout