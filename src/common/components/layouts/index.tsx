import React, { ReactNode } from 'react';

import Navbar from '@/common/components/layouts/Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='w-full flex-auto min-w-0  mt-10  flex flex-col px-2 md:px-0'>
      <Navbar></Navbar>
      <div className='content md:px-3 px-0 mt-10'>
        {children}
      </div>
    </main>
  );
};

export default Layout;
