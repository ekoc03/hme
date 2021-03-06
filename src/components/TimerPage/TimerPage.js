import React, { useState, useRef } from 'react';
import './TimerPage.css';
import TimerCheckbox from '../TimerCheckbox';
import { Link } from "react-router-dom";
  
const TimerPage = ({timers, addTimer, selectedTimer}) => { 
    const [timerValue, setTimerValue] = useState([]);
    const inputEl = useRef(null);

    const onChange = (event) => {
        setTimerValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (timerValue > 30) alert('Maximum 30 seconds');

        if (timers.length >= 6) alert('Maximum 6 timers');

        if (timers.includes(timerValue)) alert('Already exists');

        if (timerValue <= 30 && timers.length +1 <= 6 && !timers.includes(timerValue)) {
            addTimer(timerValue);
        }

        setTimerValue('');
    };
    
    return (
        <div className="container">
            <h1>List of Timers</h1>
            <p>Enter the number of seconds you want to set for each timer. Maximum 30 seconds</p>
            {(timers).map(value => {
                return <TimerCheckbox key={value} value={value}></TimerCheckbox>
            })}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="number" onChange={onChange} value={timerValue} ref={inputEl}/>
                </div>
                <input type="submit" value="Submit" />
            </form>
            { selectedTimer && <Link to="/" className="timer-link">Save selection</Link>}
        </div>
    )
}

export default TimerPage;

