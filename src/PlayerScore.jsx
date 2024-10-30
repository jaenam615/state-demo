import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

function PlayerScore({
        id, 
        initialScore,
        resetRequested,
        acknowledgeReset
    }){
    
    const [score, setScore] = useState(initialScore);
    
    const increaseScore = (previousScore) => {
        const newScore = previousScore + 1;
        setScore(newScore);
    } 

    useEffect(() => {
        if (resetRequested) {
            setScore(0);
            acknowledgeReset();
        }
    }, [resetRequested, acknowledgeReset]);

    const nthPlayer = "Player" + id;
    return (
        <>
            <span>{nthPlayer}: {score}</span>
            <button onClick = {() => increaseScore(score)}>+1</button>
            <div />
        </>
    )
}

export default  PlayerScore;