import React, { useState } from 'react'
import Search from './Search'
import Sort from './Sort';
import Filtered from './Filtered';
import BlogCard from '@/common/components/elements/BlogCard';
import { BLOG_ITEMS } from '@/common/constant/blogs';
import { BlogProps } from '@/common/types/blog';

const Blog = () => {
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    return (
        <>
            <Search search={search} setSearch={setSearch}></Search>
            <div className="flex justify-between mt-10">
                <h1 className="text-xl font-semibold">Read My Blog</h1>
                <Sort setSort={setSort}></Sort>
            </div>
            <div className="md:py-5 mb-2 py-2">
                <Filtered filter={filter} setFilter={setFilter}></Filtered>
            </div>
            {
                BLOG_ITEMS.map((item: BlogProps, index: number) => (
                    <BlogCard key={index} title={item.title} slug={item.slug} summary={item.summary} viewer={item.viewer} time={item.time} author={item.author}></BlogCard>
                ))
            }
            <div className="flex justify-center mt-10">
                <button className="bg-primary  py-2 px-4 rounded-md">Load More</button>
            </div>
        </>
    )
}
export default Blog