import React,{useState, } from "react"
import Board from "./Board"
import { calculateWinner } from '../helpers';

const styles = {
    width: "200px",
    margin: "20px auto"
}
 
const Game=()=>{

    const [board, setBoard] = useState(Array(9).fill(null));

    const [playerXIsNext,setPlayerXIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick =i=>{
        const copyBoard = [...board];
        if (winner || copyBoard[i]) return;
        copyBoard[i] = playerXIsNext ? "X" : "O";
        setBoard(copyBoard);
        setPlayerXIsNext(!playerXIsNext);
    };
   
    const renderMoves=()=>{
        return(
            <button onClick={()=>{setBoard(Array(9).fill(null))}}>Start!</button>
        )
    };


    return(
        <>
        <Board squares={board} onClick={handleClick} />
        <div style={styles}>
        <p>{winner ? "Winner: " + winner : "Next Player: " +(playerXIsNext? "X": "O")}</p>
        {renderMoves()}
        </div>
        </>
    )
}
export default Game;