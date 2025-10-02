import parse from 'html-react-parser';
import moment from 'moment';
import React from 'react';

import Hr from '@/common/components/elements/Hr';
import { formatDateToAgo } from '@/common/helpers';
import { BlogProps } from '@/common/types/blog';

import Command from './Command';

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
            {moment(new Date(data?.time ?? new Date())).format(
              'DD-MM-YYYY HH:mm:ss',
            )}{' '}
            ( {data && formatDateToAgo(data?.time)})
          </h2>
        </div>
        <p className="text-base">{data?.viewer} views</p>
      </div>
      <Hr></Hr>
      <div className="text-base leading-7">{data && parse(data.body)}</div>
      <Command term={data?.slug ?? '-'}></Command>
    </div>
  );
};

export default BlogDetail;
