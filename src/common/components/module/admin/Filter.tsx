import React, { useState } from 'react'
import Search from './Search'
import Sort from '../blog/components/Sort'
import { FaFilter, FaPlus } from 'react-icons/fa'
import Link from 'next/link';

interface PropsFilter {
    search: string,
    setSearch: (search: string) => void;
    setSort: (sort: string) => void;
}
const Filter = ({ search, setSearch, setSort }: PropsFilter) => {
    return (
        <>
            <div className="text-center justify-center">
                <Search search={search} setSearch={setSearch}></Search>
            </div>
            <div className="flex justify-between items-center mt-4 md:mt-10  flex-col md:flex-row">
                <h2 className="text-md">Blogs</h2>
                <div className="flex gap-4 items-center">
                    <Sort setSort={setSort}></Sort>
                    <div className="flex gap-2 items-center cursor-pointer justify-center">
                        <p>Filter</p>
                        <FaFilter color="#ffff" size={15}></FaFilter>
                    </div>
                    <Link href="/admin/create" type="submit" className="flex justify-center items-center bg-white text-dark px-3 gap-2 rounded-md text-semibold py-2">
                        <span className="font-medium">Blog</span>
                        <FaPlus size={20}></FaPlus>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Filter