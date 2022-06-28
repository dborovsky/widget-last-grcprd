import React from 'react';
import './index.css';
import {CountDaysTimer} from './CountDaysTimer';

function App() {
    const DAYS_AGO_LAST_GCPRD_TASK = new Date("2022-04-08, 11:49:36 AM").getTime(); //data api
    const targetDateObj = { targetDate: DAYS_AGO_LAST_GCPRD_TASK };

    return (
        <div>
            <h1>Last fixed GCRPRD task</h1>
            <CountDaysTimer targetDate={targetDateObj.targetDate} />
        </div>
    );
}

export default App;