import React, { Component } from 'react';
import Stats from './Stats/Stats';
import Actions from './Actions/Actions';
import GenerateCardDeck from './Actions/ActionUtilities/GenerateCardDeck';
import BuildPhysicalCard from './Actions/ActionUtilities/BuildPhysicalCard';
import './Blackjack-table.css';

class BlackjackTable extends Component {
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

	// Just map through the array, don't do any JavaScript logic here
	// {this.state.cardsToDeal.map(src=>{ return src; })}
	render() {
		let readyToDeal = this.state.cardsToDeal;
		return (<div className="blackjack-table">
			<Stats {...this.state} />
			{ readyToDeal ? readyToDeal.map((card, index) => { 
				return <BuildPhysicalCard key={index} index={index} cardToBeDealt={card} />;
			}) : null}
			<div className="betting-squares">
				<div className="dot"></div>
				<Actions {...this.state} updateBJTableState={this.updateBJTableState} />
			</div>
		</div>);
	}
}

export default BlackjackTable;
