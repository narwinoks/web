import React, { useEffect,useState } from 'react';

import BlogCard from '@/common/components/elements/BlogCard';
import BlogSkeleton from '@/common/components/skeleton/BlogSkeleton';
import { api } from '@/common/libs/useApi';
import { BlogProps } from '@/common/types/blog';

import Filtered from './Filtered';
import Search from './Search';
import Sort from './Sort';

const Blog = () => {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [isLoadingFetchDataBlog, setIsLoadingFetchDataBlog] =
    useState<boolean>(true);
  useEffect(() => {
    api.get('api/blog').then((response) => {
      const transformed: BlogProps[] = response.data.data.map((item: any) => ({
        title: item.title,
        slug: item.slug,
        summary: item.body?.replace(/<[^>]+>/g, '').slice(0, 100),
        viewer: item.count.toString(),
        time: item.createdAt,
        author: item.author?.username ?? 'Unknown',
        body: item.body,
      }));
      setIsLoadingFetchDataBlog(false);
      setBlogs(transformed);
    });
  }, []);
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
      {isLoadingFetchDataBlog ? (
        <BlogSkeleton />
      ) : blogs.length === 0 ? (
        <p>Tidak ada blog yang ditemukan.</p>
      ) : (
        blogs.map((item: BlogProps, index: number) => (
          <BlogCard
            key={index}
            title={item.title}
            slug={item.slug}
            viewer={item.viewer}
            time={item.time}
            author={item.author}
          />
        ))
      )}
      <div className="mt-10 flex justify-center">
        <button className="bg-primary  rounded-md px-4 py-2">
          Load More {sort}
        </button>
      </div>
    </>
  );
};
export default Blog;
