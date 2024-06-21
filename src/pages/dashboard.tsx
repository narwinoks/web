import { NextSeo } from 'next-seo';
import React from 'react';

import Dashboard from '@/common/components/module/dashboard';

const PAGE_TITLE = 'Dashboard';
const dashboard = () => {
  return (
    <section>
      <NextSeo title={`${PAGE_TITLE} - Winarno`} />
      <Dashboard></Dashboard>
    </section>
  );
};
export default dashboard;
