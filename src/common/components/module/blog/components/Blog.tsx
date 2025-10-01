import React, { useCallback, useEffect, useState } from 'react';

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
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoadingFetchDataBlog, setIsLoadingFetchDataBlog] =
    useState<boolean>(true);
  const limit = 10;
  const fetchBlogs = useCallback(
    (pageNum: number, isReset = false) => {
      setIsLoadingFetchDataBlog(true);
      const offset = (pageNum - 1) * limit;

      const params = new URLSearchParams();
      params.append('limit', limit.toString());
      params.append('offset', offset.toString());
      if (sort) params.append('sort', sort);
      if (filter) params.append('category_id', filter.toString());
      if (search) params.append('search', search);

      api.get(`api/blog?${params.toString()}`).then((response) => {
        const newBlogs: BlogProps[] = response.data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          summary: item.body?.replace(/<[^>]+>/g, '').slice(0, 100),
          viewer: item.count.toString(),
          time: item.createdAt,
          author: item.author?.username ?? 'Unknown',
          body: item.body,
        }));
        setBlogs((prevBlogs) =>
          isReset ? newBlogs : [...prevBlogs, ...newBlogs],
        );
        setTotalCount(response.data.totalCount);
        setIsLoadingFetchDataBlog(false);
      });
    },
    [filter, search, sort, limit],
  );

  useEffect(() => {
    setPage(1);
    fetchBlogs(1, true);
  }, [fetchBlogs]);
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchBlogs(nextPage);
  };

  const hasMore = blogs.length < totalCount;
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
      {!isLoadingFetchDataBlog && hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            className="bg-primary  rounded-md px-4 py-2"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};
export default Blog;
