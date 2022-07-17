import { Component } from "react";

class CardList extends Component {
    
    componentDidMount() {
        console.log('CardList was mounted now');
    }
    
    
    render() {
        console.log('render from CardList', this.props.monsters);
        
        const { monsters } = this.props;
        
        return (
            
            <div>
                {
                    monsters.map(
                        (monster) => {
                            return (
                                <div key={monster.name}>
                                    <h1 key={monster.id}>{monster.name}</h1>
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
    }
}

export default CardList;