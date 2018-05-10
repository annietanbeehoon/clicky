import React from 'react';
import "./MemoryCard.css";


const MemoryCard = props => {
    const removeCard = () => {
        props.removeCard(props.id);
    }

return (
    <div className="card">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
        <span onClick={removeCard} className="remove">X</span>
    </div>
)
}
    
export default MemoryCard;