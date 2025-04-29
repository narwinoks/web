import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

import BlogDetail from '@/common/components/module/blog/components/BlogDetail';
import BlogDetailSkeleton from '@/common/components/skeleton/BlogDetailSkeleton';
import { api } from '@/common/libs/useApi';
import { BlogProps } from '@/common/types/blog';
const SingleBlog = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [IsLoadingFetchDataBlog, setIsLoadingFetchDataBlog] =
    useState<boolean>(false);
  const [blog, setBlog] = useState<BlogProps>();
  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await api.get(`/api/blog/${slug}`);
        const data = response?.data?.data;

        const transformed: BlogProps = {
          title: data.title,
          slug: data.slug,
          summary: data.body?.replace(/<[^>]+>/g, '').slice(0, 100),
          viewer: data.viewer?.toString(),
          time: data.createdAt,
          author: data.author?.username ?? 'Unknown',
          body: data.body,
        };

        setBlog(transformed);
      } catch (error) {
        setIsLoadingFetchDataBlog(false);
      } finally {
        setIsLoadingFetchDataBlog(false);
      }
    };

    setIsLoadingFetchDataBlog(true);
    fetchBlog();
  }, [slug]);

  const PAGE_TITLE = blog?.title;
  return (
    <section>
      <NextSeo title={`${PAGE_TITLE} - Winarno`} />
      {!IsLoadingFetchDataBlog ? (
        <BlogDetail data={blog}></BlogDetail>
      ) : (
        <BlogDetailSkeleton />
      )}
    </section>
  );
};

export default SingleBlog;
