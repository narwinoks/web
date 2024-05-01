import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="xs:py-6   xs:px-9 mx-auto max-w-4xl flex-col justify-center px-4 py-6">
        {children}
      </div>
    </>
  );
};

export default Layout;
