import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/isWinner";
import isDraw from "../../helpers/isDraw";

function Grid({ numberOfCards }) {
    const [turn, setTurn] = useState(true); // true -> O, false -> X
    const [grid, setGrid] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState('');
    const [winnerCards, setWinnerCards] = useState([]);

    function playMove(id) {
        let player = (turn) ? 'O' : 'X'
        grid[id] = player; 
        if(isWinner(grid, player, setWinnerCards)) setWinner(player);
        else if(isDraw(grid)) setWinner('D');
        setGrid(grid);
        setTurn(!turn);
    }

    function reset() {
        setWinner('');
        setWinnerCards([]);
        setGrid(Array(numberOfCards).fill(""));
    }

    return (
        <div className="grid-container">
            {
                (winner == '') ? <div className="turn-header"> Current Turn : <span> {(turn) ? 'O' : 'X'} </span> </div> :
                                 <div className="result-conatiner"> 
                                    <div className="header"> { (winner=='D') ? <span className="draw-header">It's DRAW!!</span> : <span className="winner-header">' {winner} ' is WINNER!</span> } </div>
                                    <button className="reset-btn" onClick={reset}> Restart Game </button>
                                 </div>
            }
            <div className="grid">
                {
                    grid.map((value, idx) => {
                        return <Card key = {idx} id = {idx} type = {value} onPlayMove = {(winner=='') ? playMove : null} winnerCard = {winnerCards.includes(idx)} />
                    })
                }
            </div>
        </div>
    )
}

export default Grid;
