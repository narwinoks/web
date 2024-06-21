import React from 'react';

import Hr from '@/common/components/elements/Hr';
import { formatDateToAgo } from '@/common/helpers';
import { BlogProps } from '@/common/types/blog';

interface BlogDetailProps {
  data: BlogProps | undefined;
}
const BlogDetail = ({ data }: BlogDetailProps) => {
  return (
    <div className="py-1">
      <h1 className="text-xl font-medium">{data?.title}</h1>
      <div className="flex flex-col items-center justify-between gap-2 pt-2 text-sm text-textLight md:flex-row">
        <div className="flex items-center justify-center space-x-3">
          <h2 className="text-base">Authors: {data?.author}</h2>
          <div className="mb-2 text-lg">.</div>
          <h2 className="text-base">
            March 21, 2024 ( {data && formatDateToAgo(data?.time)})
          </h2>
        </div>
        <p className="text-base">{data?.viewer} views</p>
      </div>
      <Hr></Hr>
      <div className="text-base leading-7">
        <p className="mb-3">What influences developers to adopt a product?</p>
        <p className="mb-3">
          Trust. The tools they adopt and advocate for impact their reputation.
          You might have heard “no one ever got fired for buying IBM” in
          reference to making good choices.
        </p>
        <p className="mb-3">
          But picking older, well-adopted tools can be at odds with how fast the
          industry moves. Is there a newer alternative that solves my needs
          better? Ask your developer.
        </p>
        <p>
          Keeping up the latest trends is part of their job. They need to know
          what`s a fad and what`s here to stay. This is why experienced
          developers become skeptical of almost everything. It`s hard to earn
          their trust.
        </p>
        <p className="mb-3">
          Developer marketing is about building trust. Here`s what`s worked for
          me.
        </p>
        <h1 className="text-lg font-medium">
          How can I improve my developer marketing?
        </h1>
      </div>
    </div>
  );
};

export default BlogDetail;
