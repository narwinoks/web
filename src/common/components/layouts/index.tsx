import React, { ReactNode, useEffect, useState } from 'react'
import Header from '../header/Header';
import { useRouter } from 'next/router';
import { counter } from '@/common/constant/counter';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pageName = router.pathname.split('/')[1];
  const isFullPageHeader =
    pageName === 'login' ||
    pageName === 'dashboard';
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
      {
        isTimeUp && <Header></Header>
      }
      <main className='lg:mx-auto lg:my-20 my-10 mx-4'>
        {children}
      </main>
    </>
  )
}

export default Layout