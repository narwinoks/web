import clsx from 'clsx';
import React, { useState } from 'react'
import { GrMoreVertical } from "react-icons/gr";

interface PropsFilter {
    icon: JSX.Element,
    label: string,
    value: string,
    setFilter: (filter: string) => void;
    filter: string
}
const Filter = ({ icon, label, value, setFilter, filter }: PropsFilter) => {
    const handleClick = () => {
        setFilter(value);
    };

    return (
        <div className={clsx('gap-1 flex w-auto border dark:bg-black bg-white py-1 px-2 shadow-sm rounded justify-center items-center cursor-pointer', value == filter ? "text-dark border-dark dark:text-white dark:border-white" : "text-borderDark light:text-borderLight dark:border-borderDark border-borderLight")
        } onClick={() => handleClick()}>
            {icon}
            < h3 className="text-base" > {label}</h3 >
        </div >
    )
}

export default Filter