import Link from 'next/link'
import React from 'react'
import { MENU_ITEMS } from '@/common/constant/menu'
import { MenuItemProps } from '@/common/types/menu'
import ThemeToggleButton from '../elements/ThemeToggleButton'
const Navbar = () => {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex items-center justify-between text-center">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          {MENU_ITEMS.map((data: MenuItemProps, index) => (
            <Link href={data.href} className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex  align-middle py-1 px-2' key={index} passHref>
              {data.title}
            </Link>
          ))}
        </nav>
        <div className='py-1 flex'>
          <ThemeToggleButton></ThemeToggleButton>
        </div>
      </div>
    </aside>
  )
}

export default Navbar