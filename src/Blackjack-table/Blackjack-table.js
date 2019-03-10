import React, { Component } from 'react';
import Stats from './Stats/Stats';
import Actions from './Actions/Actions';
import GenerateCardDeck from './Actions/Utilities/GenerateCardDeck';
import BuildPhysicalCard from './Actions/Utilities/BuildPhysicalCard';
import './Blackjack-table.css';

export default class BlackjackTable extends Component {
  constructor(props){
    super(props);
    this.updateBJTableState = this.updateBJTableState.bind(this);
    this.state = {
      numberOfDecksForGame: 1,
      totalMoney: 500,
      isCounting: false,
      deck_id: null,
      dealersCardValue:0,
      playersCardValue:0,
      cardsToDeal: [],
      theCount: 0
    }
  }

  componentDidMount(){
   const { numberOfDecksForGame } = this.state;
    GenerateCardDeck.newDeck(numberOfDecksForGame).then(id=>{
      this.setState({
        deck_id: id
      });
    })
  }

  outputCardsToTable() {
    const readyToDeal = this.state.cardsToDeal;
    return readyToDeal.map((card, index) => {
      this.updateCardsValueTotal(card.value, index);
      this.updateCardCountValue(card.value);
      return <BuildPhysicalCard key={index} index={index} cardToBeDealt={card} />
    });
  }

  updateCardsValueTotal(cardsValue, index) {
    const { dealersCardValue, playersCardValue } = this.state;
    let parsedCardValueForAdding = this.determineCardValue(cardsValue);
    if (index % 2 === 0) {
      // Player
      console.log(parsedCardValueForAdding);
    } else {

    }
  }


  determineCardValue(cardVal) {
      if (cardVal === "ACE") return [1, 11];
      const tens = ["JACK", "QUEEN", "KING"];
      return tens.indexOf(cardVal) !== -1 ? 10 : parseInt(cardVal);
  }

  updateBJTableState(obj){
    this.setState(obj);
  }

  render() {
      return (<div className="blackjack-table">
        <h1>Card Count: {this.state.theCount}</h1>
        <Stats {...this.state} />
        { this.outputCardsToTable() }
        <div className="betting-squares">
          <Actions {...this.state} updateBJTableState={this.updateBJTableState} />
        </div> 
    </div>);
  }
}

