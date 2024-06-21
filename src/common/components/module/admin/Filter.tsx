import Link from 'next/link';
import React from 'react';
import { FaFilter, FaPlus } from 'react-icons/fa';

import Search from './Search';
import Sort from '../blog/components/Sort';

interface PropsFilter {
  search: string;
  setSearch: (search: string) => void;
  setSort: (sort: string) => void;
}
const Filter = ({ search, setSearch, setSort }: PropsFilter) => {
  return (
    <>
      <div className="justify-center text-center">
        <Search search={search} setSearch={setSearch}></Search>
      </div>
      <div className="mt-4 flex flex-col items-center justify-between  md:mt-10 md:flex-row">
        <h2 className="text-md">Blogs</h2>
        <div className="flex items-center gap-4">
          <Sort setSort={setSort}></Sort>
          <div className="flex cursor-pointer items-center justify-center gap-2">
            <p>Filter</p>
            <FaFilter color="#ffff" size={15}></FaFilter>
          </div>
          <Link
            href="/admin/create"
            type="submit"
            className="text-semibold flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-dark"
          >
            <span className="font-medium">Blog</span>
            <FaPlus size={20}></FaPlus>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Filter;
