import React, {FC} from 'react';
import  { useCountDays } from "./hooks/useCountDays";
import DateTimeDisplay from './DateTimeDisplay';

type DateDisplay = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
};

interface ITargetDateType {
    targetDate: number
}

export const CountDaysTimer: FC<ITargetDateType> = ( property) => {
    const [days, hours, minutes, seconds] = useCountDays(property.targetDate);

    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }: DateDisplay) => {
    return (
        <div className="countdown">
            <DateTimeDisplay value={days} type={'Days'}  />
            <DateTimeDisplay value={hours} type={'Hours'}  />
            <DateTimeDisplay value={minutes} type={'Minutes'}  />
            <DateTimeDisplay value={seconds} type={'Seconds'}  />
        </div>
    );
};

//export default CountDaysTimer;