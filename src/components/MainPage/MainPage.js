import React from 'react';
import './MainPage.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="container">
            <h1>User type selection</h1>
            <p>Choose what you want to do</p>
            <Router>
                <ul>
                    <li>
                        <Link to="/menu" className="main-link">Go to game</Link>
                    </li>
                    <li>
                        <Link to="/setTimer" className="main-link">Go to admin page</Link>
                    </li>
                </ul>
            </Router>
        </div>
    )
}

export default MainPage;

