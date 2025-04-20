import React from 'react';
import Skeleton from 'react-loading-skeleton';
const BlogSkeleton = () => {
  return (
    <div>
      <Skeleton className="skeleton-custom" height={100} />
    </div>
  );
};

export default BlogSkeleton;
