import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const EditBlog = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold">Edit Blog</h1>
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
          <label htmlFor="Category">Category</label>
          <select
            name="category"
            id="category"
            className={clsx(
              'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
              'focus:shadow-outline  bg-transparent focus:outline-none',
              'mt-1 px-4 py-2',
            )}
          >
            <option value="">Select category</option>
          </select>
        </div>
        <div className="mt-2">
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            className={clsx(
              'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
              'focus:shadow-outline  bg-transparent focus:outline-none',
              'mt-1 px-4 py-2',
            )}
            rows={8}
            placeholder="Content blog here"
          ></textarea>
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

export default EditBlog;
