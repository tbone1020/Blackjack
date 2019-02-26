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

    updateBlackjackTableState() {
        // Prevent side effects
        this.props.updateBJTableState({cardsToDeal: buildInitialCards});
    }

    buildPlayersCards(grabbedCard) {
        let playerStyles = BuildCardsStyles.updatePlayersStyles();
        return CardProperties.BuildCardProperties(grabbedCard.value, grabbedCard.image, "card to-player", playerStyles);
    }

    buildDealersCards(grabbedCard) {
        let dealerStyles = BuildCardsStyles.updateDealersStyles();
        return CardProperties.BuildCardProperties(grabbedCard.value, grabbedCard.image, "card to-dealer", dealerStyles);
    }

    grabIntialDealCards() {
        const dequeuedCards = CardDeckStorage.grabCards(4);
        const builtInitialCards = dequeuedCards.map((card, index) => {
            if (index % 2 === 0) {
                return this.buildPlayersCards(card);
            } else {
                return this.buildDealersCards(card);
            }
        });
    }

    render() {
        return (<button className={this.props.stage !== "deal" ? "hide-btn" : 'extended-btn'} onClick={()=>this.checkBetAmount()}>Deal</button>);
    }
}