import Link from 'next/link'
import React from 'react'

import { MENU_ITEMS } from '@/common/constant/NavItems';

import ThemeToggleButton from '../../elements/ThemeToggleButton';


const Navbar = () => {
    return (
        <aside className="tracking-tight flex md:justify-between text-center items-center my-5">
            <div className="lg:sticky lg:top-20">
                <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav">
                    <div className="flex flex-row space-x-0 pr-10">
                        {
                            MENU_ITEMS.map((item, index) => {
                                return (
                                    <Link href={item.href} key={index} className="text-md transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 pr-4">
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </nav>
            </div>
            <div>
                <ThemeToggleButton></ThemeToggleButton>
            </div>
        </aside>
    )
}

export default Navbar