import React from 'react';

import Link from 'next/link';
function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}
const index = () => {
  return <section>
    {/* <PreloadResources /> */}
    <h1 className="mb-8 text-2xl font-medium tracking-tighter">
      hey, I'm Winarno 👋
    </h1>
    <p className="prose prose-neutral dark:prose-invert">
      {`I'm a frontend developer, optimist, and community builder. I currently `}
      <Link href="/work">work</Link>
      {` as the VP of Product at `}
      <span className="not-prose">
        <Badge href="https://vercel.com/home">
          <svg
            width="13"
            height="11"
            role="img"
            aria-label="Vercel logo"
            className="mr-1 inline-flex"
          >
            <use href="/sprite.svg#vercel" />
          </svg>
          Vercel
        </Badge>
      </span>
      {`, where I help teach the `}
      {` community, an open-source web framework built with `}
      <Badge href="https://react.dev">
        <svg
          width="14"
          height="14"
          role="img"
          aria-label="React logo"
          className="!mr-1"
        >
          <use href="/sprite.svg#react" />
        </svg>
        React
      </Badge>
      .
    </p>
  </section>
};

export default index;
