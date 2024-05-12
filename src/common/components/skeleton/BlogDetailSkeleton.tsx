import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogDetailSkeleton = () => {
    return (
        <div className="py-1">
            <Skeleton className='skeleton-custom' width={400} />
            <div className="flex justify-between flex-col  md:flex-row text-textLight gap-2 text-sm">
                <div>
                    <h2 className="text-base">
                        <Skeleton className='skeleton-custom' width={150} />
                    </h2>
                </div>
                <p className="text-base">
                    <Skeleton className='skeleton-custom' width={100} />
                </p>
            </div>
            <div className="text-base leading-7">
                <Skeleton className='skeleton-custom' height={400} />
            </div>
        </div>
    )
}

export default BlogDetailSkeleton