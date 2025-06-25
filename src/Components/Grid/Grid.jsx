import Card from "../Card/Card";
import "./Grid.css";

function Grid({ numberOfCards }) {
    return (
        <div className="grid">
            {
                Array(numberOfCards).fill().map((el, idx) => {
                    return <Card key={idx} type="" />
                })
            }
        </div>
    )
}

export default Grid;
