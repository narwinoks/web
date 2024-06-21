import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { FaEye, FaTrash } from 'react-icons/fa';

import { formatDateToAgo, formatNumber } from '@/common/helpers';

import Card from '../../elements/Card';

const BlogList = () => {
  return (
    <section className="mt-4 md:mt-10">
      <Card>
        <div className="flex items-center">
          <div className="w-11/12">
            <h1 className="pb-1 text-lg font-medium">
              Auth with node js and express js and Json web token
            </h1>
            <p className="text-sm">
              User authentication is a crucial aspect of web applications that
              ensures...
            </p>
            <div className="flex items-center gap-2 py-2 text-sm text-textLight">
              <p className="text-sm font-light">
                {formatNumber('20000')} views
              </p>
              <span className="mb-1 font-bold">.</span>
              <p className="text-sm font-light">
                {formatDateToAgo('2023-07-23 08:24:00')}{' '}
              </p>
            </div>
            <h2 className="text-sm font-light text-textLight">Authors: WIN</h2>
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
