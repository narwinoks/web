import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.bubble.css';

import { api } from '@/common/libs/useApi';
import { FilterBlogProps } from '@/common/types/filterBlog';
const CreateBlog = () => {
  const [value, setValue] = useState<string>('');
  const [categories, setCategories] = useState<FilterBlogProps[]>([]);
  useEffect(() => {
    api.get('/api/categories').then((response) => {
      setCategories(response.data.data);
    });
  }, []);
  return (
    <section>
      <h1 className="text-xl font-semibold">Create Blog</h1>
      <div className="mt-5">
        <div className="mt-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className={clsx(
              'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
              'focus:shadow-outline  bg-transparent focus:outline-none',
              'mt-1 px-4 py-2',
            )}
          />
        </div>
        <div className="mt-2">
          <select
            name="category"
            id="category"
            className={clsx(
              'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
              'focus:shadow-outline bg-transparent focus:outline-none',
              'mt-1 px-4 py-2',
            )}
          >
            <label htmlFor="Category">Category</label>
            {categories &&
              categories.map((category, index) => (
                <option value={category.value} key={index}>
                  {category.label}
                </option>
              ))}
          </select>
        </div>
        <div className="mt-2">
          <label htmlFor="Category">Body</label>
          <ReactQuill
            className="w-[100%]"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
        <div className="ml-auto mt-5 flex justify-end">
          <Link
            href="/admin"
            className="rounded-md border border-borderDark  px-5 py-2 dark:border-light"
          >
            Cancel
          </Link>
          <button className="ml-4 rounded-md bg-light px-6 py-2 text-dark">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateBlog;
