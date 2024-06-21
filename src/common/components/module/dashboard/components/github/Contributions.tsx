import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import useSWR from 'swr';

import { fetcher } from '@/services/fetcher';

import Calendar from './Calender';
import Overview from './Overview';

type ContributionsProps = {
  username: string;
  type: string;
  endpoint: string;
};
const Contributions = ({ endpoint }: ContributionsProps) => {
  const { data } = useSWR(endpoint, fetcher);
  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;
  return (
    <section>
      <div className="flex items-center gap-2 md:gap-5">
        <FaGithub size={30}></FaGithub>
        <h1 className="text-2xl font-medium">Contributions</h1>
      </div>
      <div className="mt-2 flex flex-col justify-between lg:flex-row">
        <p className="mt-1">My contributions from last year on github.</p>
        <Link
          href="/https://github.com/narwinoks"
          className="underline"
          target="_blank"
        >
          @narwinoks
        </Link>
      </div>
      {!data && <div className="dark:text-neutral-400">No Data</div>}
      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
