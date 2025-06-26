import Icon from "../Icon/Icon";
import "./Card.css";

function Card({ id, type, onPlayMove, winnerCard }) {

    return (
        <div className={(winnerCard) ? "card winner-card" : (type == "" && onPlayMove != null) ? "card clickable" : "card non-clickable"} onClick = {(type == "") ? (() => onPlayMove(id)) : null} >
            <div className="icon">
                <Icon iconName = {type}/>
            </div>
        </div>
    )
}

export default Card;
