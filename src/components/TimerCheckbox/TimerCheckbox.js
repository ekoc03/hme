import React from 'react';
import './TimerCheckbox.css';

const TimerCheckbox = ({value, selectTimer, selectedTimer}) => {
    const onChange = (changeEvent) => {
        selectTimer(changeEvent.target.value);
    }

    return (
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    value={value}
                    checked={selectedTimer === value}
                    className="form-check-input"
                    onChange={onChange}
                />
                <span>00:00:{value}</span>
            </label>
        </div>
    )
}

export default TimerCheckbox;
