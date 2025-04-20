import { clsx } from 'clsx';
import React from 'react';
interface PropsSearch {
  search: string;
  setSearch: (search: string) => void;
}
const Search = ({ search, setSearch }: PropsSearch) => {
  return (
    <div className="flex w-3/4 justify-center text-center">
      <input
        type="text"
        className={clsx(
          'w-full rounded-md border border-borderLight dark:border-borderDark',
          'focus:shadow-outline  bg-transparent focus:outline-none',
          'px-10 py-2',
        )}
        placeholder="Search anything..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default Search;
