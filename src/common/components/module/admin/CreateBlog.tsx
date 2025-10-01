import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.bubble.css';

import { useToast } from '@/common/hooks/ToastContext';
import { api } from '@/common/libs/useApi';
import { FilterBlogProps } from '@/common/types/filterBlog';
type BlogProps = {
  title: string;
  body: string;
  categoryId: number | null;
  excerpt: string;
};
const CreateBlog = () => {
  const [value, setValue] = useState<string>('');
  const [categories, setCategories] = useState<FilterBlogProps[]>([]);
  const { data: session, status } = useSession();
  const [data, setData] = useState<BlogProps>({
    title: '',
    body: '',
    categoryId: null,
    excerpt: '',
  });
  const toast = useToast();
  useEffect(() => {
    api.get('/api/categories').then((response) => {
      setCategories(response.data.data);
    });
  }, []);
  const save = () => {
    const body = value;
    setData((prevData) => ({
      ...prevData,
      body: body,
      authorId: session?.user?.id,
    }));
    const json: any = data;
    api
      .post('/api/blog', json)
      .then(() => {
        toast.success({ heading: 'Success', message: 'Login Success' });
      })
      .catch((error) => {
        toast.error({ heading: 'Error', message: error.message });
      });
  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const router = useRouter();
  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/');
    }
  }, [router, status]);
  return (
    <section>
      <h1 className="text-xl font-semibold">Create Blog</h1>
      <div className="mt-5">
        <div className="mt-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter blog title"
            value={data.title || ''}
            name="title"
            onChange={handleInputChange}
            className={clsx(
              'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
              'focus:shadow-outline  bg-transparent focus:outline-none',
              'mt-1 px-4 py-2',
            )}
          />
        </div>
      </div>
      <div className="mt-2">
        <label htmlFor="excerpt">Excerpt</label>
        <input
          id="excerpt"
          type="text"
          placeholder="Enter blog excerpt"
          value={data.excerpt || ''}
          name="excerpt"
          onChange={handleInputChange}
          className={clsx(
            'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
            'focus:shadow-outline  bg-transparent focus:outline-none',
            'mt-1 px-4 py-2',
          )}
        />
      </div>
      <div className="mt-2">
        <label htmlFor="categoryId">Category</label>
        <select
          name="categoryId"
          id="categoryId"
          value={data.categoryId || ''}
          onChange={handleInputChange}
          className={clsx(
            'w-full rounded-md border border-[#DBDBDB] dark:border-borderDark',
            'focus:shadow-outline bg-transparent focus:outline-none',
            'mt-1 px-4 py-2',
          )}
        >
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
        <button
          onClick={save}
          className="ml-4 rounded-md bg-light px-6 py-2 text-dark"
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default CreateBlog;
