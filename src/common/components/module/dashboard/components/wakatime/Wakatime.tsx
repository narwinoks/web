import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

import { timeAgo } from '@/common/helpers';
import { fetcher } from '@/services/fetcher';

import Active from './Active';
import Average from './Average';

const Wakatime = () => {
  const { data } = useSWR('/api/read-stats', fetcher);

  return (
    <>
      <h1 className="text-2xl font-medium">Weekly Statistics</h1>
      <div className="mt-2 flex flex-col justify-between gap-6 text-base sm:flex-row sm:gap-4">
        <div>
          My{' '}
          <Link
            href="https://wakatime.com/@narnowin"
            target="_blank"
            className="hover:underline"
          >
            WakaTime
          </Link>{' '}
          last 7 days stats.
        </div>
        <div>
          <p className="text-sm">
            Last update: {data && timeAgo(data?.last_update)}
          </p>
        </div>
      </div>
      <Average data={data}></Average>
      <Active data={data}></Active>
    </>
  );
};

export default Wakatime;
