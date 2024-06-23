import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import { api } from '@/common/libs/useApi';

import BlogList from './BlogList';
import Filter from './Filter';

const Admin = () => {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [blogs, setBlog] = useState([]);
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/');
    }
  }, [router, status]);
  useEffect(() => {
    api.get('api/blog').then((response: any) => {
      setBlog(response.data.data);
    });
  }, [sort, search]);
  return (
    <>
      <Filter setSort={setSort} search={search} setSearch={setSearch}></Filter>
      {blogs.map((blog: any) => {
        return <BlogList key={blog.id} blog={blog} />;
      })}
    </>
  );
};
export default Admin;
