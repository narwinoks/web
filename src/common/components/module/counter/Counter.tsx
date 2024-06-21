import React, { useEffect, useState } from 'react';

import { counter } from '@/common/constant/counter';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(counter.time) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="ml-32 mt-80 flex  flex-col justify-center gap-4 text-center  md:ml-0 md:mt-40 md:flex-row md:gap-6">
          <div className="relative w-1/2 items-center rounded-lg border border-dark p-4 text-center dark:border-light md:w-auto md:p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform bg-light px-2 dark:bg-dark">
              <p className="text-sm font-medium">Day</p>
            </div>
            <h1 className="text-4xl font-bold">{timeLeft.days || '0'}</h1>
          </div>
          <div className="relative w-1/2 items-center rounded-lg border border-dark  p-4 dark:border-light md:w-auto md:p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform bg-light px-2 dark:bg-dark">
              <p className="text-sm font-medium">Hour</p>
            </div>
            <h1 className="text-4xl font-bold">{timeLeft.hours || '0'}</h1>
          </div>
          <div className="relative w-1/2 items-center rounded-lg border border-dark  p-4 dark:border-light md:w-auto md:p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform bg-light px-2 dark:bg-dark">
              <p className="text-sm font-medium">Minute</p>
            </div>
            <h1 className="text-4xl font-bold">{timeLeft.minutes || '0'}</h1>
          </div>
          <div className="relative w-1/2 items-center rounded-lg border border-dark  p-4 dark:border-light md:w-auto md:p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform bg-light px-2 dark:bg-dark">
              <p className="text-sm font-medium">Second</p>
            </div>
            <h1 className="text-4xl font-bold">{timeLeft.seconds || '0'}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Counter;
