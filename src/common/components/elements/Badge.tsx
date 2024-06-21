import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import Image from './Image';

type colorType = ['dark', 'light', 'transparent', 'danger'];
interface BadgeProps {
  image?: string;
  color?: colorType;
  children?: ReactNode;
  className?: string;
  title?: string;
  href: string;
}
const Badge = ({ image, href, className, title }: BadgeProps) => {
  return (
    <Link href={href} target="_blank">
      <div
        className={clsx(
          className,
          'inline-flex  items-center rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100',
        )}
      >
        {image && (
          <>
            <Image
              className="mr-2"
              src={image}
              alt="image"
              width="20"
              height="20"
            ></Image>
          </>
        )}
        {title}
      </div>
    </Link>
  );
};
export default Badge;
