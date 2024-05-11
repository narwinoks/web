import React from 'react'
import Card from './Card'
import { MdArrowOutward } from 'react-icons/md'
import Link from 'next/link'

const BlogCard = () => {
    return (
        <Link href="/">
            <Card className='cursor-pointer mb-5'>
                <div className="flex justify-between items-center space-x-2">
                    <div className="flex flex-col">
                        <h1 className="font-medium text-lg">How Much Do Software Developer Jobs Pay per Month?</h1>
                        <div className="flex py-2 items-center text-textLight gap-2 text-sm">
                            <p className="text-sm font-light">101,328 views</p>
                            <span className="font-bold mb-1">.</span>
                            <p className="text-sm font-light">1 days ago</p>
                        </div>
                        <h2 className="text-base text-textLight font-medium">Authors: Winarno</h2>
                    </div>
                    <MdArrowOutward size={25}></MdArrowOutward>
                </div>
            </Card>
        </Link>
    )
}

export default BlogCard