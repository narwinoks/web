import React, { ReactNode } from 'react'
import Header from '../header/Header';
import { useRouter } from 'next/router';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const pageName = router.pathname.split('/')[1];
  const isFullPageHeader =
    pageName === 'login' ||
    pageName === 'dashboard';
  return (
    <>
      <Header></Header>
      <div className="layout-overlay layout-menu-toggle"></div>
      <main className='lg:mx-auto lg:my-20 my-10 mx-4'>
        {children}
      </main>
    </>
  )
}

export default Layout