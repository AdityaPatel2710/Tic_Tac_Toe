import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid({ numberOfCards }) {
    const [turn, setTurn] = useState(true); // true -> O, false -> X

    function playMove() {
        setTurn(!turn);  // value changed after playMove function is executed
        return turn;  // return curr turn value (value of turn before changing)
    }

    return (
        <>
            <div className="turn-header"> Current Turn : <span> {(turn) ? 'O' : 'X'} </span> </div>
            <div className="grid">
                {
                    Array(numberOfCards).fill().map((el, idx) => {
                        return <Card key = {idx} onPlayMove = {playMove} />
                    })
                }
            </div>
        </>
    )
}

export default Grid;
