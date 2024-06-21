import Link from 'next/link';
import React from 'react';

import { MENU_ITEMS } from '@/common/constant/menu';
import { MenuItemProps } from '@/common/types/menu';

import ThemeToggleButton from '../elements/ThemeToggleButton';
const Navbar = () => {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex items-center justify-between text-center">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          {MENU_ITEMS.map((data: MenuItemProps, index) => (
            <Link
              href={data.href}
              className="flex px-2 py-1 align-middle  transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              key={index}
              passHref
            >
              {data.title}
            </Link>
          ))}
        </nav>
        <div className="flex py-1">
          <ThemeToggleButton></ThemeToggleButton>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
