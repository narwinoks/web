import { clsx } from 'clsx';
import React from 'react'
interface PropsSearch {
    search: string,
    setSearch: (search: string) => void;
}
const Search = ({ search, setSearch }: PropsSearch) => {
    return (
        <div className="flex justify-end w-1/2 ml-auto">
            <input type="text" className={clsx('border border-borderLight dark:border-borderDark rounded-md w-full'
                , 'bg-transparent  focus:outline-none focus:shadow-outline', 'py-2 px-10')} placeholder='Search anything...' onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>
    )
}

export default Search