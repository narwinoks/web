import React, { ReactNode } from 'react'
import Header from '../header/Header';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
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