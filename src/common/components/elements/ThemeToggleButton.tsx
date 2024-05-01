import { useTheme } from 'next-themes';
import React from 'react'
import { MdOutlineDarkMode as DarkIcon, MdOutlineWbSunny as LightIcon } from "react-icons/md";

const ThemeToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const toggleTheme = () =>
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    return (
        <div className='md:static absolute bottom-10 right-5'>
            {
                resolvedTheme === 'light' ?
                    <div className='cursor-pointer' onClick={toggleTheme} >
                        <DarkIcon size={20}></DarkIcon>
                    </div>
                    :
                    <div className='cursor-pointer' onClick={toggleTheme}>
                        <LightIcon size={20}></LightIcon>
                    </div>
            }
        </div>
    )
}

export default ThemeToggleButton