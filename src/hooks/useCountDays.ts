import {useEffect, useState} from 'react';

const useCountDays = (targetDate: number) => {
    const [countDaysDisplay, setCountDaysDisplay] = useState(
         new Date().getTime() - targetDate
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDaysDisplay(new Date().getTime() - targetDate);
        }, 1000);

        return () => clearInterval(interval);
    }, [countDaysDisplay]);

    return getReturnValues(countDaysDisplay);
};

const getReturnValues = (countDays: number) => {
    //calculate time
    const days = Math.floor(countDays / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDays % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDays % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export { useCountDays };
