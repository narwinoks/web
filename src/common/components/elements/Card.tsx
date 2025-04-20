import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'card w-auto rounded-md border border-borderLight bg-white dark:border-borderDark dark:bg-black',
        'min-h-10',
        'px-4 py-2',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
