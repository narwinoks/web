import BlogDetail from '@/common/components/module/blog/components/BlogDetail';
import BlogDetailSkeleton from '@/common/components/skeleton/BlogDetailSkeleton';
import { BLOG_ITEMS } from '@/common/constant/blogs';
import { BlogProps } from '@/common/types/blog';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'
import React from 'react'

const SingleBlog = () => {
    const router = useRouter()
    const slug = router.query.slug;
    const blog = BLOG_ITEMS.find((item: BlogProps) => item.slug === slug);
    const PAGE_TITLE = blog?.title;
    return (

        <section>
            <NextSeo title={`${PAGE_TITLE} - Winarno`} />
            {
                blog ? <BlogDetail data={blog}></BlogDetail> : <BlogDetailSkeleton />
            }
        </section>
    )
}

export default SingleBlog