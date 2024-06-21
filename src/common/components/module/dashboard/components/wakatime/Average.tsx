import React from 'react';

import { formatDate } from '@/common/helpers';

import ItemView from './ItemView';

interface AverageProps {
  data: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    best_day?: {
      text?: string;
      date?: string;
    };
    all_time_since_today?: {
      text?: string;
    };
    start_date?: string;
    end_date?: string;
  };
}
const Average = ({ data }: AverageProps) => {
  const dailyTotal = data?.human_readable_total || 'N/A';
  const dailyAverage = data?.human_readable_daily_average || 'N/A';
  const bestDayText = data?.best_day?.text || 'N/A';
  const bestDayDate = data?.best_day?.date;
  const allTimeSinceToday = data?.all_time_since_today?.text || 'N/A';
  const startDate = data?.start_date ? formatDate(data.start_date) : '';
  const endDate = data?.end_date ? formatDate(data.end_date) : '';
  const bestDay = bestDayDate
    ? `${formatDate(bestDayDate)} (${bestDayText})`
    : 'N/A';
  return (
    <div className="grid grid-cols-1 gap-4 pt-3 md:grid-cols-2 ">
      <ItemView label="Start Date" value={startDate}></ItemView>
      <ItemView label="End Date" value={endDate}></ItemView>
      <ItemView label="Daily Coding Average" value={dailyAverage}></ItemView>
      <ItemView label="This Week Coding Time" value={dailyTotal}></ItemView>
      <ItemView label="Best Day Coding Time" value={bestDay}></ItemView>
      <ItemView
        label="All Time Since Today"
        value={allTimeSinceToday}
      ></ItemView>
    </div>
  );
};

export default Average;
