import React, { Component } from 'react';
import Stats from './Stats/Stats';
import ActionButtons from './ActionButtons/ActionButtons';
import './Blackjack-table.css';



class BlackjackTable extends Component {
	constructor(props){
		super(props);
		this.updateParentStateObj = this.updateParentStateObj.bind(this);
		this.state = {
			totalMoney: 500,
			isCounting: false,
			deck_id: null,
			dealersCardValue:0,
			playersCardValue:0,
			cardSoruces: [],
			offset: -25,
			count: 0
		}
	}

	componentDidMount(){
		fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
			.then(response => response.json())
			.then(json=>{
				this.setState({ deck_id: json.deck_id });
			})
	}

	updateParentStateObj(obj){
		this.setState(obj);
	}

	// Just map through the array, don't do any JavaScript logic here
	render() {
		return (<div className="blackjack-table">
			<Stats {...this.state} />
			{this.state.cardSoruces.map(src=>{
				return src;
			})}
			<div className="betting-squares">
				<div className="dot"></div>
				<ActionButtons {...this.state} parentState={this.updateParentStateObj} />

			</div>
		</div>);
	}
}

export default BlackjackTable;
