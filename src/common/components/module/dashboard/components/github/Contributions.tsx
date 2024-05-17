import React from 'react'
import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import Overview from './Overview';
import Calendar from './Calender';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

type ContributionsProps = {
  username: string;
  type: string;
  endpoint: string;
};
const Contributions = ({ username, endpoint }: ContributionsProps) => {
  const { data } = useSWR(endpoint, fetcher);
  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;
  return (
    <section>
      <div className="flex md:gap-5 gap-2 items-center">
        <FaGithub size={30}></FaGithub>
        <h1 className="text-2xl font-medium">Contributions</h1>
      </div>
      <div className="flex flex-col lg:flex-row mt-2 justify-between">
        <p className="mt-1">My contributions from last year on github.</p>
        <Link href="/https://github.com/narwinoks" className="underline" target="_blank">
          @narwinoks
        </Link>
      </div>
      {!data && <div className='dark:text-neutral-400'>No Data</div>}
      {data && (
        <div className='space-y-3'>
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  )
}

export default Contributions