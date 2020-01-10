import React, { useState, useEffect } from 'react';
import './MenuPage.css';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import * as data from '../../menuPerDay.json';

const MenuPage = () => {
    const [seconds, setSeconds] = useState(10);
    let history = useHistory();
    const currentMenu = data.default.find(({day}) => day === moment().format('dddd').toLowerCase()).menu;

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    if (seconds === 0) history.push("/game");

    return (
        <div className="container">
            <span className="timer">{seconds}</span>
            <h1>Welcome to HME!</h1> 
            <h2>Today's menu - {moment().format("MM / DD / YYYY")}</h2>
            <ul className="menu">
                {
                    currentMenu.map(dish => {
                        return <li key={`${dish.name}-${dish.price}`}><span className="dish-name">{dish.name}</span> <span className="price">{dish.price}</span></li>
                    })
                }
                
            </ul>
        </div>
    )
}

export default MenuPage;
