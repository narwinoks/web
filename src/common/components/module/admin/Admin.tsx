import React, { useState } from 'react'
import Filter from './Filter';
import BlogList from './BlogList';

const Admin = () => {
    const [search, setSearch] = useState<string>('');
    const [sort, setSort] = useState<string>('');
    return (
        <>
            <Filter setSort={setSort} search={search} setSearch={setSearch}></Filter>
            <BlogList></BlogList>
        </>
    )
}
export default Admin