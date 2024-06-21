import { NextSeo } from 'next-seo';
import React from 'react';

import Work from '@/common/components/module/work';
const PAGE_TITLE = 'Work';
const work = () => {
  return (
    <section>
      <NextSeo title={`${PAGE_TITLE} - Winarno`} />
      <Work></Work>
    </section>
  );
};

export default work;
