import Icon from "../Icon/Icon";
import "./Card.css";

function Card({ type }) {

    return (
        <div className="card">
            <div className="icon">
                <Icon iconName = {type}/>
            </div>
        </div>
    )
}

export default Card;
