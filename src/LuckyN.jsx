import { useState } from "react";
import Dice from "./Dice";

const getRolls = (a) => {
    return Array.from({ length: a}, () => Math.floor(Math.random() * 6) + 1);
}

export default function LuckyN({amount=2, target=7}) {
    const [dice, setDice] = useState(getRolls(amount));

    const roll = () => {
        setDice(getRolls(amount));
    }
    
    const sum = (arr) => {
        return arr.reduce((acc, el) => acc + el, 0);
    }

    return (
        <>
            <h1>Lucky {target}</h1>
            {<Dice values={dice} />}
            <br/>
            <br/>
            <button onClick = {roll}>Roll!</button>
            {(sum(dice) === target) && <h2>YOU WIN!</h2>}
        </>
    )
}