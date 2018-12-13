import React, { Component } from 'react';
import './ActionButtons.css';

/*
	
	1. User clicks "deal"
	2. Make call to API, deal 4 cards
	3. 


*/
class ActionButtons extends Component {

	updateParentStateObj(obj){
		this.props.stateHandle(obj);
	}

	preventValueExceeding(e){
		if(parseInt(e.target.value) > this.props.totalMoney){
			e.target.value = this.props.totalMoney;
		}
	}

	getCards(numberOfCards){
		fetch(`https://deckofcardsapi.com/api/deck/${this.props.deck_id}/draw/?count=${numberOfCards}`)
			.then(response => response.json())
			.then(cards=>{
				console.log(cards);
			});
	}

	dealCards(){

		// 1. Deal 4 cards
		// 2. Grab all there values.
		// 3. Hide "Deal" button and show the rest of the action buttons
	}

	hit(){
		// 1. Grab 1 additional card
		console.log(this.props.deck_id);
	}

	stand(){
		// 1. Don't grab any cards
		// 2. Give control to the dealer
	}

	doubleDown(){
		// 1. Grab one card but give a class to turn it to on its side
		// 2. after grabbing the card give control to the dealer
	}

	split(){
		// 1. Move both cards side by side.
		// 2. Start with left and go until player stands or busts
		// 2. Finally go with right and go until player stands or busts
	}

	render() {

		return (<div className="action-buttons-container">
			<div className="bet-amount">
				<label htmlFor="betAmount">Bet amount</label>
				<input name="betAmount" onChange={e=>this.preventValueExceeding(e)} type="number" min="5"/>
			</div>
			<button onClick={()=>this.dealCards(4)}>Deal</button>
			<button onClick={()=>this.hit()}>Hit</button>
			<button>Stand</button>
			<button>Double Down</button>
			<button>Split</button>
		</div>)
	}
}

export default ActionButtons;
