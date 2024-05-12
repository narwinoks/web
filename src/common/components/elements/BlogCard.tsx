import React from 'react'
import Card from './Card'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'
import { formatDateToAgo, formatNumber } from '@/common/helpers';

interface PropsBlogCard {
    title: string,
    slug: string,
    summary?: string,
    viewer: string,
    time: string,
    author: string
}
const BlogCard = ({ title, slug, summary, viewer, time, author }: PropsBlogCard) => {
    return (
        <Link href={`/blog/${slug}`}>
            <Card className='cursor-pointer mb-5'>
                <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col">
                        <h1 className="font-medium text-lg py-2">{title}</h1>
                        {
                            summary && <p className="text-sm">{summary}</p>
                        }
                        <div className="flex py-2 items-center text-textLight gap-2 text-sm">
                            <p className="text-sm font-light">{formatNumber(viewer)} views</p>
                            <span className="font-bold mb-1">.</span>
                            <p className="text-sm font-light">{formatDateToAgo(time)}</p>
                        </div>
                        <h2 className="text-sm text-textLight font-light">Authors: {author}</h2>
                    </div>
                    <MdArrowOutward size={25}></MdArrowOutward>
                </div>
            </Card>
        </Link>
    )
}

export default BlogCard