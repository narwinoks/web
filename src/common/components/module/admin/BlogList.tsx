import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { FaEye, FaTrash } from 'react-icons/fa';

import { formatDateToAgo, formatNumber } from '@/common/helpers';

import Card from '../../elements/Card';
interface BlogListProps {
  blog?: any;
}
const BlogList = ({ blog }: BlogListProps) => {
  return (
    <section className="mt-4 md:mt-10">
      <Card>
        <div className="flex items-center">
          <div className="w-11/12">
            <h1 className="pb-1 text-lg font-medium">{blog.title}</h1>
            <p className="text-sm">{blog.excerpt}</p>
            <div className="flex items-center gap-2 py-2 text-sm text-textLight">
              <p className="text-sm font-light">
                {formatNumber('20000')} views
              </p>
              <span className="mb-1 font-bold">.</span>
              <p className="text-sm font-light">
                {formatDateToAgo(blog.createdAt)}{' '}
              </p>
            </div>
            <h2 className="text-sm font-light text-textLight">
              Authors: {blog.author.username}
            </h2>
          </div>
          <div className="ml-auto w-1/12">
            <button className="rounded-md bg-light px-2 py-2 dark:bg-white">
              <FaEye color="#000" size={15}></FaEye>
            </button>
            <button className="mt-1 rounded-md bg-light px-2 py-2 dark:bg-white">
              <BsPencilSquare color="#000" size={15} />
            </button>
            <button className="mt-1 rounded-md bg-red-800 px-2 py-2">
              <FaTrash color="#fff" size={15} />
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default BlogList;
