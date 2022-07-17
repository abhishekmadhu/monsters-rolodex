import { Component } from "react";

class Card extends Component{
    render() {
        const { id, name } = this.props;
        return (
            <div 
                className = 'card-container'
                key={id}>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set2&size=180x180`}
                />
                <h1 key={id}>{name}</h1>
            </div>
        );
    }
}

export default Card;