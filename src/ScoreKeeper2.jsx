import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PlayerScore from './PlayerScore';

function ScoreKeeper2({players}){
    const [scores, setScores] = useState(new Array(players).fill(0));
    const [resetRequested, setResetRequested] = useState(false);

    const reset = () => {
        setResetRequested(true);
        setScores(new Array(players).fill(0));
    }

    const acknowledgeReset = () => setResetRequested(false);

    return (
        <div>
            {scores.map((score, index)=>{
                return <PlayerScore  
                key = {index} 
                id = {index + 1} 
                initialScore = {score} 
                resetRequested={resetRequested} 
                acknowledgeReset={acknowledgeReset}
                />
            })}
            <button onClick = {reset}>Reset</button>
        </div>
    )
}

export default ScoreKeeper2;