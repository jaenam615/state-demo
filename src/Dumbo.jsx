import { useState } from "react";

function generateBoard(){
    console.log("Making initial game board");
    return Array(5000);
}

export default function Dumbo(){
    const [board, setBoard] = useState(generateBoard);
    return <button onClick={()=> setBoard("helo!")}>Click me to change state</button>
}