import { useState, useEffect, useRef } from "react"
import "./index.scss"


//Computer AI Opponent
    //Random
    //Intelligent


function showSymbol(val){
    if(val === 0){
        return "";
    }

    return val === 1 ? "X" : "O";
}



function checkWinner(board){
    return board[0] && board[0] === board[1] && board[1] === board[2]
    || board[3] && board[3] === board[4] && board[4] === board[5]
    || board[6] && board[6] === board[7] && board[7] === board[8]
    || board[0] && board[0] === board[4] && board[4] === board[8]
    || board[2] && board[2] === board[4] && board[4] === board[6]
    || board[0] && board[0] === board[3] && board[3] === board[6]
    || board[1] && board[1] === board[4] && board[4] === board[7]
    || board[2] && board[2] === board[5] && board[5] === board[8]

    ;

    ;
}

export const Board = () => {
    const [board,setBoard] = useState(Array(9).fill(0));;
    const [playerNum,setPlayerNum] = useState(1);
    const [winner,setWinner] = useState(-1);
    const hasWon = useRef(false);
    
    useEffect(() => {
        hasWon.current = checkWinner(board);
        setWinner(playerNum);
    },[board])

    return (<div className="board-wrapper">
        <h1>Ultimate Tic-Tac-Toe</h1>
        <h2>Player {playerNum ? "One" : "Two"}'s Turn</h2>
        {hasWon.current ? <h2>
            { winner ? "Player One Wins" : "Player Two Wins" }
        </h2> : "" }
        <div className="main-board">
        {board.map((val,index) => {
            return <div onClick={ () => {

                if(hasWon.current){
                    console.log("Game is over");
                    return;
                }
                
                if(board[index] !== 0){
                    return;
                }

                board[index] = playerNum ? 2 : 1;
                setBoard([...board])
                setPlayerNum(playerNum ? 0 : 1);
            }
                
            } key={"boardspace"+index}>{showSymbol(val)}</div>;
        })}
    </div>
    
    </div>)

}