import React from 'react'
import Filter from './Filter'
import { FILTER_BLOG_ITEMS } from '@/common/constant/blogFilter'
import { FilterBlogProps } from '@/common/types/filterBlog'

interface FilteredProps {
    setFilter: (filter: string) => void;
    filter: string;
}
const Filtered = ({ setFilter, filter }: FilteredProps) => {
    return (
        <div className="md:flex grid grid-cols-4 gap-2">
            {
                FILTER_BLOG_ITEMS.map((item: FilterBlogProps, index: number) => (
                    <Filter label={item.label} value={item.value} icon={item.icon} key={index} filter={filter} setFilter={setFilter} />
                ))
            }
        </div>
    )
}
export default Filtered