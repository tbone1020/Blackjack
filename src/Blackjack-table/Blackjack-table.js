import React, { Component } from 'react';
import Stats from './Stats/Stats';
import ActionButtons from './ActionButtons/ActionButtons';
import './Blackjack-table.css';


/* 
Have two components. 
1. A componenet for the money and count
2. A component for the hit, stand, split, and Double down buttons
*/
class BlackjackTable extends Component {
	constructor(props){
		super(props);
		this.setParentState = this.setParentState.bind(this);
		this.state = {
			totalMoney: 500,
			isCounting: false,
			deck_id: null,
			count: 0
		}
	}

	componentDidMount(){
		fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
			.then(response => response.json())
			.then(json=>{
				this.setState({ deck_id: json.deck_id });
			})
	}

	setParentState(obj){
		this.setState(obj);
	}

	render() {
		return (<div className="blackjack-table">
			<Stats {...this.state} />
			<div className="betting-squares">
				<div className="dot"></div>
				<ActionButtons {...this.state} stateHandle={this.setParentState} />

			</div>
		</div>);
	}
}

export default BlackjackTable;
