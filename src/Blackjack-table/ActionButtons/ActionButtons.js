import React, { Component } from 'react';
import './ActionButtons.css';

/*
	
	1. User clicks "deal"
	2. Make call to API, deal 4 cards
	3. 


*/
class ActionButtons extends Component {
	constructor(props){
		super(props);
		this.state = {
			playersCards:[],
			dealersCards:[]
		}
	}

	dealCards(obj){
		this.props.stateHandle(obj);
	}


	render() {

		return (<div className="action-buttons-container">
			<button onClick={()=>this.props.dealCards()}>Deal</button>
			<button>Hit</button>
			<button>Stand</button>
			<button>Double Down</button>
			<button>Split</button>
		</div>)
	}
}

export default ActionButtons;
