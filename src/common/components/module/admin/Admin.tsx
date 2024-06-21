import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import BlogList from './BlogList';
import Filter from './Filter';

const Admin = () => {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const { status } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/');
    }
  }, [router, status]);
  return (
    <>
      <Filter setSort={setSort} search={search} setSearch={setSearch}></Filter>
      <BlogList></BlogList>
      <p>{sort}</p>
    </>
  );
};
export default Admin;
