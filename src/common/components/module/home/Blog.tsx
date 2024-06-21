import React from 'react';

import { BLOG_ITEMS } from '@/common/constant/blogs';
import { BlogProps } from '@/common/types/blog';

import BlogCard from '../../elements/BlogCard';

const Blog = () => {
  return (
    <section className="mt-8 md:mt-12">
      <div className="mb-8 md:mb-12">
        In my opinion, writing is not easy, that`s the reason I didn`t choose it
        as my main hobby. However, there are several things that we should write
        down to make it easier to understand. Therefore, I try to write this
        blog in a simple style.
      </div>
      {BLOG_ITEMS.map((item: BlogProps, index: number) => (
        <BlogCard
          title={item.title}
          slug={item.slug}
          viewer={item.viewer}
          time={item.time}
          author={item.author}
          key={index}
        ></BlogCard>
      ))}
    </section>
  );
};
export default Blog;
