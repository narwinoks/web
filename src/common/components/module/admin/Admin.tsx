import React, { useEffect, useState } from 'react'
import Filter from './Filter';
import BlogList from './BlogList';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Admin = () => {
    const [search, setSearch] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    const { data: session, status } = useSession();
    console.log(status,session);
    
    const router = useRouter();
    useEffect(() => {
        if (status == 'unauthenticated') {
            router.push("/")
        }
    }, [router, status])
    return (
        <>
            <Filter setSort={setSort} search={search} setSearch={setSearch}></Filter>
            <BlogList></BlogList>
        </>
    )
}
export default Admin