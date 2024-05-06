import { useTheme } from 'next-themes';
import React from 'react'
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import clsx from 'clsx';

const ThemeToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    return (
        <div className={clsx('flex justify-center items-center w-18 py-1  border rounded-full cursor-pointer', resolvedTheme == 'dark' ? 'border-light' : 'border-dark')}>
            <div className={clsx('flex items-center transition ease-in-out delay-150', resolvedTheme == "dark" ? "ml-8 mr-1" : "mr-8 ml-1")}>
                {
                    resolvedTheme === "light" ?
                        <div className='bg-dark rounded-full p-1' onClick={toggleTheme}>
                            <MdOutlineDarkMode size={12} className="text-light" />
                        </div>
                        :
                        <div className='bg-light rounded-full p-1' onClick={toggleTheme}>
                            <MdOutlineWbSunny size={12} className="text-dark" />
                        </div>
                }
            </div>
        </div>

    )
}

export default ThemeToggleButton