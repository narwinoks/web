import AOS from 'aos';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import React, { useEffect } from 'react';

import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import '@/common/styles/globals.css';

import Layout from '@/common/components/layouts';
import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

import defaultSEOConfig from '../../next-seo.config';

const ProgressBar = dynamic(
  () => import('../common/components/elements/ProgressBar'),
  { ssr: false },
);

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    // eslint-disable-next-line react/no-unknown-property
    <>
      <style>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...defaultSEOConfig} />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Layout>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
