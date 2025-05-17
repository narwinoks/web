import { NextSeo } from 'next-seo';
import React from 'react';

import Question from '@/common/components/module/question/components/Question';
const PAGE_TITLE = 'Tanya Win';
const question = () => {
  return (
    <section>
      <NextSeo title={`${PAGE_TITLE} - Winarno`} />
      <Question></Question>
    </section>
  );
};

export default question;
