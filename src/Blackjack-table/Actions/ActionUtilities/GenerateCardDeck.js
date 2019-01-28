import { Component } from 'react';
import CardDeckStorage from './CardDeckStorage';

export default class GenerateCardDeck extends Component {

  static newDeck(numberOfDecks){
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numberOfDecks}`)
      .then(response => response.json())
      .then(deck=>{
        CardDeckStorage.queueCards(deck.deck_id);
        return deck.deck_id;
      })
  } 

  shuffleDeck(deck_id){

  }
}
