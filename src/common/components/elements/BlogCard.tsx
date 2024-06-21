import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import { formatDateToAgo, formatNumber } from '@/common/helpers';

import Card from './Card';

interface PropsBlogCard {
  title: string;
  slug: string;
  summary?: string;
  viewer: string;
  time: string;
  author: string;
}
const BlogCard = ({
  title,
  slug,
  summary,
  viewer,
  time,
  author,
}: PropsBlogCard) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="mb-5 cursor-pointer">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col">
            <h1 className="py-2 text-lg font-medium">{title}</h1>
            {summary && <p className="text-sm">{summary}</p>}
            <div className="flex items-center gap-2 py-2 text-sm text-textLight">
              <p className="text-sm font-light">{formatNumber(viewer)} views</p>
              <span className="mb-1 font-bold">.</span>
              <p className="text-sm font-light">{formatDateToAgo(time)} </p>
            </div>
            <h2 className="text-sm font-light text-textLight">
              Authors: {author}
            </h2>
          </div>
          <MdArrowOutward size={25}></MdArrowOutward>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
