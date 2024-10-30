import { useState } from 'react';

function ScoreKeeper() {
    const [scores, setScores] = useState({p1Score: 0 , p2Score: 0});
    const addOne = (num) => {
        let playerScore = "p" + num + "Score";
        setScores((oldScores) => {
            return {...oldScores, [playerScore]: oldScores[playerScore] + 1};
        });
    }
    return(
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={()=>addOne(1)}>+1 Player 1</button>
            <button onClick={()=>addOne(2)}>+1 Player 2</button>
        </div>
    )
}

export default ScoreKeeper;