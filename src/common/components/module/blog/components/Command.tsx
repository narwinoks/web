import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import React from 'react';

interface CommandProps {
  term: string;
}

const Command = ({ term }: CommandProps) => {
  const { theme } = useTheme();
  const giscusTheme = theme === 'dark' ? 'dark' : 'light';
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO || '';
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '';
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '';
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '';
  return (
    <Giscus
      id="comments"
      repo={repo as `${string}/${string}`}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={giscusTheme}
      lang="id"
      loading="lazy"
    />
  );
};

export default Command;
