import React, { useState } from 'react';

import BlogCard from '@/common/components/elements/BlogCard';
import { BLOG_ITEMS } from '@/common/constant/blogs';
import { BlogProps } from '@/common/types/blog';

import Filtered from './Filtered';
import Search from './Search';
import Sort from './Sort';

const Blog = () => {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  return (
    <>
      <Search search={search} setSearch={setSearch}></Search>
      <div className="mt-10 flex justify-between">
        <h1 className="text-xl font-semibold">Read My Blog</h1>
        <Sort setSort={setSort}></Sort>
      </div>
      <div className="mb-2 py-2 md:py-5">
        <Filtered filter={filter} setFilter={setFilter}></Filtered>
      </div>
      {BLOG_ITEMS.map((item: BlogProps, index: number) => (
        <BlogCard
          key={index}
          title={item.title}
          slug={item.slug}
          summary={item.summary}
          viewer={item.viewer}
          time={item.time}
          author={item.author}
        ></BlogCard>
      ))}
      <div className="mt-10 flex justify-center">
        <button className="bg-primary  rounded-md px-4 py-2">
          Load More {sort}
        </button>
      </div>
    </>
  );
};
export default Blog;
