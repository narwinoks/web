import { counter } from '@/common/constant/counter';
import React, { useEffect, useState } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Counter = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
                <div className="flex md:ml-0 ml-32  md:gap-6 gap-4 md:mt-40 mt-80  text-center justify-center flex-col md:flex-row">
                    <div className="relative border dark:border-light text-center border-dark p-4 md:p-8 items-center md:w-auto w-1/2 rounded-lg">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-light dark:bg-dark px-2">
                            <p className="text-sm font-medium">Day</p>
                        </div>
                        <h1 className="text-4xl font-bold">{timeLeft.days || '0'}</h1>
                    </div>
                    <div className="relative border dark:border-light border-dark p-4 md:p-8  items-center rounded-lg md:w-auto w-1/2">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-light dark:bg-dark px-2">
                            <p className="text-sm font-medium">Hour</p>
                        </div>
                        <h1 className="text-4xl font-bold">{timeLeft.hours || ""}</h1>
                    </div>
                    <div className="relative border dark:border-light border-dark p-4 md:p-8  items-center rounded-lg md:w-auto w-1/2">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-light dark:bg-dark px-2">
                            <p className="text-sm font-medium">Minute</p>
                        </div>
                        <h1 className="text-4xl font-bold">{timeLeft.minutes || ""}</h1>
                    </div>
                    <div className="relative border dark:border-light border-dark p-4 md:p-8  items-center rounded-lg md:w-auto w-1/2">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-light dark:bg-dark px-2">
                            <p className="text-sm font-medium">Second</p>
                        </div>
                        <h1 className="text-4xl font-bold">{timeLeft.seconds || ""}</h1>
                    </div>
                </div>
            )}
        </>
    );
};

export default Counter;
