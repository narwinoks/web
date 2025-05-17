import React, { useEffect, useState } from 'react';

import BlogSkeleton from '@/common/components/skeleton/BlogSkeleton';
import { api } from '@/common/libs/useApi';
import { BlogProps } from '@/common/types/blog';

import BlogCard from '../../elements/BlogCard';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [isLoadingFetchDataBlog, setIsLoadingFetchDataBlog] =
    useState<boolean>(true);
  useEffect(() => {
    api.get('api/blog?limit=3').then((response) => {
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
    <section className="mt-8 md:mt-12">
      <div className="mb-8 md:mb-12">
        <p>Enjoy reading my following articles:</p>
      </div>
      <>
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
      </>
    </section>
  );
};
export default Blog;
