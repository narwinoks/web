import React, { useState } from 'react'
import { HiMiniChevronDown } from "react-icons/hi2";

const ITEM_FILTER = [
    {
        value: "desc",
        label: "Desc"
    },
    {
        value: "asc",
        label: "Asc"
    },
]
interface PropsSort {
    setSort: (sort: string) => void;
}
const Sort = ({ setSort }: PropsSort) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div className="flex cursor-pointer relative" onClick={() => { setOpen(!isOpen) }}>
            <p className="text-base font-light">Sort by</p>
            <HiMiniChevronDown size={25}></HiMiniChevronDown>
            {
                isOpen &&
                <div className="absolute left-0 bg-white dark:bg-black rounded-md shadow-sm min-w-20 text-center  py-2 top-8 ml-auto">
                    <ul className="w-full">
                        {
                            ITEM_FILTER.map((item, index) => {
                                return (
                                    <li onClick={() => { setSort(item.value) }} value={item.value} className="hover:bg-light dark:hover:bg-dark w-full" key={index}>
                                        {item.label}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}
export default Sort