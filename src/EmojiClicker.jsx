import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "E"}]);
    const addEmoji = () => {
        setEmojis((oldEmojis)=> [...oldEmojis, {id: uuid(), emoji:"F"}]);
    }
    const deleteEmoji = (i) => {
        setEmojis((oldEmojis)=> oldEmojis.filter(e => e.id !== i));
    }
    return (
        <div>
            {emojis.map(e => <span key = {e.id} onClick = {()=> deleteEmoji(e.id)}>{e.emoji}</span>)}
            <button onClick = {addEmoji}>Add Emoji</button>
        </div>
    )
}