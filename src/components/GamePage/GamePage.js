import React, { useState, useEffect } from 'react';
import './GamePage.css';

const GamePage = ({selectedTimer}) => {
    const [words, setWords] = useState([]);
    const [matchedWords, setMatchedWords] = useState([]);
    const [winner, setWinner] = useState(false);
    const [timer, setTimeLeft] = useState(selectedTimer);
    const guessedWords = ['french', 'fries'];

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer <= 0) {
                setTimeLeft(0);
            } else {
                setTimeLeft(timer => timer - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const onChange = (event) => {
        setWords(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let commonWords = guessedWords.filter(function(x) {
            if(words.split(' ').indexOf(x) !== -1)
                return true;
            else
                return false;
        });

        setMatchedWords(commonWords.length);
        
        if (commonWords.length >= 0 && (commonWords.length === guessedWords.length)) {
            setWinner(true);
        }
    };

    return (
        <div className="container">
            <div>
                <span className="matched-words">Matched words: {matchedWords}</span>
                <span className="timer">{timer}</span>
            </div>
            {!winner && timer > 0 ? <div>
                <h1>Guess the menu of the day</h1> 
                <p> 
                    They are served hot, either soft or crispy, and are generally eaten as part of 
                    lunch or dinner or by themselves as a snack, and they commonly appear on the menus 
                    of fast food restaurants. They are also called finger chips.
                </p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" onChange={onChange} value={words} placeholder="Type your answer"></input>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div> : null}
            {winner ? 
                <div>
                    <p className="congrats">Congratulations! You found the menu of the day!</p>
                    <h1>French Fries $5</h1>
                </div> : null}
            {timer === 0 ? 
                <div>
                    <p className="congrats">Oops! Timeout! The menu of the day is:</p>
                    <h1>French Fries $5</h1>
                </div> : null}
        </div>
    )
    
}

export default GamePage;

