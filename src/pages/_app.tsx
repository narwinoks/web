import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '@/common/styles/globals.css';

import Layout from '@/common/components/layouts';
import {
  firaCode,
  PoppinsSans,
  onestSans,
  soraSans,
} from '@/common/styles/fonts';

import defaultSEOConfig from '../../next-seo.config.js';
import 'react-loading-skeleton/dist/skeleton.css'
const ProgressBar = dynamic(
  () => import('../common/components/elements/ProgressBar'),
  { ssr: false },
);

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {

  return (
    <>
      <style jsx global>
        {`
          html {
            --poppins-font: ${PoppinsSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
            --onestSans-font: ${onestSans.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...defaultSEOConfig} />
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Layout>
          <ProgressBar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;