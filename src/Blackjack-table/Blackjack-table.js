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
			count: 0
		}
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
