import { Component } from 'react';

export default class CardDeckStorage extends Component {
    static cards = [];

    static grabCards(cardRequestAmount) {
        const requestCardList = [];
        let cardsLeft = this.cards.length;
        if (cardsLeft > 0 && cardsLeft > cardRequestAmount) {
            for (let i = 0; i < cardRequestAmount; i++) {
                let card = this.cards.shift();
                requestCardList.push(card);
            }
            return requestCardList;
        } else {
            console.log("insufficient number of cards");
        }
    }

    static queueCards(deck_id) {
        return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
            .then(response => response.json())
            .then(result => {
                result.cards.map(index => this.cards.push(index));
            });
    }
}