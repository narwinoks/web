import { NextSeo } from 'next-seo';
import React from 'react';

import Blog from '@/common/components/module/blog';

const PAGE_TITLE = 'Blogs';
const index = () => {
  return (
    <section>
      <NextSeo title={`${PAGE_TITLE} - Winarno`} />
      <Blog></Blog>
    </section>
  );
};

export default index;
