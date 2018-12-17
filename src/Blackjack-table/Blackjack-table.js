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
		this.updateParentStateObj = this.updateParentStateObj.bind(this);
		this.state = {
			totalMoney: 500,
			isCounting: false,
			deck_id: null,
			cardArr: [],
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

	render() {
		return (<div className="blackjack-table">
			<Stats {...this.state} />
			<div className="dealers-hand">
				{this.state.cardArr.map((a,b)=>{
					let newOffset = this.state.offset += 25;
					console.log(newOffset);
					return <div key={b} style={{left: this.state.offset}} className="card-wrapper"><img src={a}/></div>
				})}
			</div>
			<div className="betting-squares">
				<div className="dot"></div>
				<ActionButtons {...this.state} stateHandle={this.updateParentStateObj} />

			</div>
		</div>);
	}
}

export default BlackjackTable;
