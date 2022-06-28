import React from 'react';

const DateTimeDisplay = ({ value, type }: {value: number, type: string}) => {
    return(
        <div className={`cell ${type}`}>
            <div className='digits'>{value}</div>
            <div className='text'>{type}</div>
        </div>
    );
};

export default DateTimeDisplay;
