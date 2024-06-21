import clsx from 'clsx';
import React from 'react';

interface PropsFilter {
  icon: JSX.Element;
  label: string;
  value: string;
  setFilter: (filter: string) => void;
  filter: string;
}
const Filter = ({ icon, label, value, setFilter, filter }: PropsFilter) => {
  const handleClick = () => {
    setFilter(value);
  };

  return (
    <div
      className={clsx(
        'flex w-auto cursor-pointer items-center justify-center gap-1 rounded border bg-white px-2 py-1 shadow-sm dark:bg-black',
        value == filter
          ? 'border-dark text-dark dark:border-white dark:text-white'
          : 'light:text-borderLight border-borderLight text-borderDark dark:border-borderDark',
      )}
      onClick={() => handleClick()}
    >
      {icon}
      <h3 className="text-base"> {label}</h3>
    </div>
  );
};

export default Filter;
