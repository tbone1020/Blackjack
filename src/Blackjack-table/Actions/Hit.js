import React from 'react';
import CardDeckStorage from './Utilities/CardDeckStorage';
import CardProperties from './Utilities/CardProperties';
import BuildCardsStyles from './Utilities/BuildCardsStyles';

export default class Hit extends React.Component {
    constructor(props) {
        super(props);
        
    }

    dealCardToPlayer() {
        const hitCard = CardDeckStorage.grabCards(1);
        console.log(hitCard);
    }

    render() {
        return (<button className={this.props.stage !== "player" ? "hide-btn" : null} onClick={()=>this.dealCardToPlayer()}>Hit</button>);
    }
}