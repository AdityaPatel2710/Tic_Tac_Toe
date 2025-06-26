import { useState } from "react";
import Icon from "../Icon/Icon";
import "./Card.css";

function Card({ onPlayMove }) {
    const[type, setType] = useState("");

    function playMove() {
        if(onPlayMove()) setType("circle");
        else setType("cross");
    }

    return (
        <div className="card" onClick={(type == "") ? playMove : null} >
            <div className="icon">
                <Icon iconName = {type}/>
            </div>
        </div>
    )
}

export default Card;
