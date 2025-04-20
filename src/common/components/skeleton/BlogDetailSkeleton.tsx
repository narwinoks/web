import React from 'react';
import Skeleton from 'react-loading-skeleton';

const BlogDetailSkeleton = () => {
  return (
    <div className="py-1">
      <Skeleton className="skeleton-custom" width={400} />
      <div className="flex flex-col justify-between  gap-2 text-sm text-textLight md:flex-row">
        <div>
          <h2 className="text-base">
            <Skeleton className="skeleton-custom" width={150} />
          </h2>
        </div>
        <p className="text-base">
          <Skeleton className="skeleton-custom" width={100} />
        </p>
      </div>
      <div className="text-base leading-7">
        <Skeleton className="skeleton-custom" height={400} />
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
