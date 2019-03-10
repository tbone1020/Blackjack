import React from 'react';
import CardDeckStorage from './Utilities/CardDeckStorage';
import CardProperties from './Utilities/CardProperties';
import BuildCardsStyles from './Utilities/BuildCardsStyles';

export default class DealCards extends React.Component {

    constructor(props) {
        super(props);
    }

    buildCardsIfValidBet() {
        if (this.props.betAmount > 0) {
            this.grabAndBuildIntialDealCards();
        } else {
            this.displayInvalidBetMessage();
        }
    }

    displayInvalidBetMessage() {
          
        const { stage, betAmount } = this.props;
        this.props.updateActionsState({
            stage,
            betAmount,
            messageToPlayer: 'Please enter a bet amount',
        });
    }

    grabAndBuildIntialDealCards() {
        const dequeuedCards = CardDeckStorage.grabCards(4);
        const builtInitialCards = dequeuedCards.map((card, index) => {
            if (index % 2 === 0) {
                return this.buildPlayersCards(card);
            } else {
                return this.buildDealersCards(card);
            }
        });
        this.updateBlackjackTableState(builtInitialCards);
    }

    buildPlayersCards(grabbedCard) {
        let playerStyles = BuildCardsStyles.updatePlayersStyles();
        return CardProperties.BuildCardProperties(grabbedCard.value, grabbedCard.image, "card to-player", playerStyles);
    }

    buildDealersCards(grabbedCard) {
        let dealerStyles = BuildCardsStyles.updateDealersStyles();
        return CardProperties.BuildCardProperties(grabbedCard.value, grabbedCard.image, "card to-dealer", dealerStyles);
    }

    updateBlackjackTableState(intialCardsForState) {
        this.props.updateBJTableState({cardsToDeal: intialCardsForState});
    }

    render() {
        return (<button className={this.props.stage !== "deal" ? "hide-btn" : 'extended-btn'} onClick={()=>this.buildCardsIfValidBet()}>Deal</button>);
    }
}