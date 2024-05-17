import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { fetcher } from '@/services/fetcher';
import useSWR from 'swr';
import Average from './Average';
import Active from './Active';
import { timeAgo } from '@/common/helpers';

const Wakatime = () => {
    const { data } = useSWR('/api/read-stats', fetcher);
    const lastUpdate = "";
    const [formattedLastUpdate, setFormattedLastUpdate] = useState<string | null>(null,);

    return (
        <>
            <h1 className="text-2xl font-medium">Weekly Statistics</h1>
            <div className="text-base mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4 justify-between">
                <div>
                    My <Link href="https://wakatime.com/@narnowin" target="_blank" className="hover:underline">WakaTime</Link> last 7 days stats.
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
    )
}

export default Wakatime