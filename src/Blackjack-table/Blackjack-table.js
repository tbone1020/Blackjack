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
    // Create a new deck
    GenerateCardDeck.newDeck(1).then(id=>{
      this.setState({
        deck_id: id
      });
    })
  }

  updateBJTableState(obj){
    this.setState(obj);
  }

  outputCardsToTable() {
    const readyToDeal = this.state.cardsToDeal;
    return readyToDeal.map((card, index) => <BuildPhysicalCard key={index} index={index} cardToBeDealt={card} />);
  }


  render() {
      return (<div className="blackjack-table">
        <Stats {...this.state} />
        { this.outputCardsToTable() }
        <div className="betting-squares">
          <Actions {...this.state} updateBJTableState={this.updateBJTableState} />
        </div> 
    </div>);
  }
}

