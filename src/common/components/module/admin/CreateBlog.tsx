import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const CreateBlog = () => {
    return (
        <section>
            <h1 className="font-semibold text-xl">Create Blog</h1>
            <div className="mt-5">
                <div className="mt-2">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Enter blog title" className={clsx('border border-[#DBDBDB] dark:border-borderDark rounded-md w-full'
                        , 'bg-transparent  focus:outline-none focus:shadow-outline', 'py-2 px-4 mt-1')} />
                </div>
                <div className="mt-2">
                    <label htmlFor="Category">Category</label>
                    <select name="category" id="category" className={clsx('border border-[#DBDBDB] dark:border-borderDark rounded-md w-full'
                        , 'bg-transparent  focus:outline-none focus:shadow-outline', 'py-2 px-4 mt-1')}>
                        <option value="">Select category</option>
                    </select>
                </div>
                <div className="mt-2">
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" className={clsx('border border-[#DBDBDB] dark:border-borderDark rounded-md w-full'
                        , 'bg-transparent  focus:outline-none focus:shadow-outline', 'py-2 px-4 mt-1')} rows={8} placeholder="Content blog here"></textarea>
                </div>
                <div className="ml-auto flex mt-5 justify-end">
                    <Link href="/admin" className="border dark:border-light border-borderDark  py-2 px-5 rounded-md">Cancel</Link>
                    <button className="text-dark bg-light ml-4 px-6 rounded-md py-2">Save</button>
                </div>
            </div>
        </section>
    )
}

export default CreateBlog