import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href: string;
  isBlank?: boolean;
}
const Button = ({ children, href }: ButtonProps) => {
  return (
    <Link href={href} target="_blank">
      <div
        className={clsx(
          'flex h-5 items-center justify-center',
          'gap-2',
          'w-auto bg-transparent',
          'cursor-pointer py-2',
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
