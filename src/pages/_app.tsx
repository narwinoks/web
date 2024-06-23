import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '@/common/styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'primereact/resources/primereact.min.css';

import Layout from '@/common/components/layouts';
import { ToastProvider } from '@/common/hooks/ToastContext';
import {
  firaCode,
  onestSans,
  PoppinsSans,
  soraSans,
} from '@/common/styles/fonts';

import defaultSEOConfig from '../../next-seo.config.js';
const ProgressBar = dynamic(
  () => import('../common/components/elements/ProgressBar'),
  { ssr: false },
);
const App = ({
  Component,
  pageProps: { session: _, ...pageProps },
}: AppProps) => {
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
      <SessionProvider>
        <ToastProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Layout>
              <ProgressBar />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ToastProvider>
      </SessionProvider>
    </>
  );
};

export default App;
