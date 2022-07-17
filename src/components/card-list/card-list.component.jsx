import { Component } from "react";

import Card from "../card/card.component";

import './card-list.styles.css'
import './card.styles.css'

class CardList extends Component {
    
    componentDidMount() {
        console.log('CardList was mounted now');
    }
    
    
    render() {
        console.log('render from CardList', this.props.monsters);
        
        const { monsters } = this.props;
        
        return (
            
            <div className="card-list">
                {
                    monsters.map(
                        (monster) => {
                            const { id, name } = monster;
                            return <Card id={id} name={name} />
                        }
                    )
                }
            </div>
        );
    }
}

export default CardList;