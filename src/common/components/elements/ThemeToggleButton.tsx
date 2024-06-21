import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  return (
    <div
      className={clsx(
        'w-18 flex cursor-pointer items-center justify-center  rounded-full border py-1',
        resolvedTheme == 'dark' ? 'border-light' : 'border-dark',
      )}
    >
      <div
        className={clsx(
          'flex items-center transition delay-150 ease-in-out',
          resolvedTheme == 'dark' ? 'ml-8 mr-1' : 'ml-1 mr-8',
        )}
      >
        {resolvedTheme === 'light' ? (
          <div className="rounded-full bg-dark p-1" onClick={toggleTheme}>
            <MdOutlineDarkMode size={12} className="text-light" />
          </div>
        ) : (
          <div className="rounded-full bg-light p-1" onClick={toggleTheme}>
            <MdOutlineWbSunny size={12} className="text-dark" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggleButton;
