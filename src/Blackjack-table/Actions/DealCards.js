import React from 'react';
import CardDeckStorage from './Utilities/CardDeckStorage';
import CardProperties from './Utilities/CardProperties';
import BuildCardsStyles from './Utilities/BuildCardsStyles';

export default class DealCards extends React.Component {
    constructor(props) {
        super(props);
    }

    /* TODO: Check the bet amount and deal cards or display message.
       Next, if "Hit" is clicked, deal the player a card */
    checkBetAmount() {

        const { betAmount, message, stage } = this.props;
        if(betAmount > 0) {
            this.grabIntialDealCards();
        } else {
            this.props.updateActionsState({
                stage,
                betAmount,
                message: 'Please enter a bet amount',
            });
        }
    }

    grabIntialDealCards() {
        const intialCards = CardDeckStorage.grabCards(4);
        const buildInitialCards = intialCards.map((card, index) => {
            if (index % 2 === 0) {
                // Player
                let playerStyles = BuildCardsStyles.updatePlayersStyles();
                return CardProperties.BuildCardProperties(card.value, card.image, "card to-player", playerStyles);
            } else {
                // Dealer
                let dealerStyles = BuildCardsStyles.updateDealersStyles();
                return CardProperties.BuildCardProperties(card.value, card.image, "card to-dealer", dealerStyles);
            }
        });
        this.props.updateBJTableState({cardsToDeal: buildInitialCards});
    }

    render() {
        return (<button className={this.props.stage !== "deal" ? "hide-btn" : 'extended-btn'} onClick={()=>this.checkBetAmount()}>Deal</button>);
    }
}