import React, {useState} from 'react';
import './TimerPage.css';
import TimerCheckbox from '../TimerCheckbox';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
  
const TimerPage = ({timers, addTimer}) => { 
    const [timerValue, setTimerValue] = useState([]);
    let history = useHistory();

    const onChange = (event) => {
        setTimerValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (timerValue <= 30) {
            addTimer(timerValue);
        } else {
            alert('Maximum 30 seconds');
        }

        if (timers.length > 6){
            timers.pop()
            alert('Maximum 6 timers');
        }
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
                    <input type="number" onChange={onChange} value={timerValue}></input>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <Router forceRefresh={true}>
                <Link to="/home" className="timer-link">Save selection</Link>
            </Router>
        </div>
    )
}

export default TimerPage;

