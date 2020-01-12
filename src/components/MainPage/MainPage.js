import React from 'react';
import './MainPage.css';
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="container">
            <h1>User type selection</h1>
            <p>Choose user rol</p>
                <ul>
                    <li>
                        <Link to="/menu" className="main-link">Normal user</Link>
                    </li>
                    <li>
                        <Link to="/setTimer" className="main-link">Admin</Link>
                    </li>
                </ul>
        </div>
    )
}

export default MainPage;

