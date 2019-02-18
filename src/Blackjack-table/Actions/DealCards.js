import React from 'react';
import CardDeckStorage from './Utilities/CardDeckStorage';
import CardProperties from './Utilities/CardProperties';
import BuildCardsStyles from './Utilities/BuildCardsStyles';

/*The key is to use CSS3 Keyframe animations */
/*For the card that is flipped over at the end of the deal,
Give it a class that waits a couple seconds and then flips is over.
After this then I can set the state from deal to player 

The dealer's face down card is called the "Hole" card
The dealer's face up card is called the "Upcard"
*/

export default class DealCards extends React.Component {
    constructor(props) {
        super(props);

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
        return (<button className={this.props.stage !== "deal" ? "hide-btn" : 'extended-btn'} onClick={()=>this.grabIntialDealCards()}>Deal</button>);
    }
}