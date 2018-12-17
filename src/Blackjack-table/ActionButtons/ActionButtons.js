import React, { Component } from 'react';
import './ActionButtons.css';

/*  */
class ActionButtons extends Component {

	constructor(props){
		super(props);
		this.state = {
			stage:'deal',
			betAmount: null,
			message:''
		}
	}

	preventValueExceeding(e){
		if(parseInt(e.target.value) > this.props.totalMoney){
			e.target.value = this.props.totalMoney;
			this.setState({betAmount: e.target.value});
		} else {
			this.setState({betAmount: e.target.value});	
		}
	}

	convertToCardsArray(obj){

	}

	convertSrcToPhysicalImage(src){

	}

	addCardsValue(){

	}

	getCards(numberOfCards){
		return fetch(`https://deckofcardsapi.com/api/deck/${this.props.deck_id}/draw/?count=${numberOfCards}`)
			.then(response => response.json())
			.then(json => json.cards);
	}

	dealCards(){
		const cardsArray = [];
		const dealNumOfCards = 5;
		const betAmount = this.state.betAmount;

		// 1. Deal 4 cards
		if(betAmount !== null && betAmount !== ''){		
			this.getCards(dealNumOfCards).then(cards => {
				// 2. Grab all there values and add to the count and the players and dealers values.
				console.log(cards); // cards
				for(let i = 0;i<cards.length;i++){
					cardsArray.push(cards[i].images.png);
				}
				// convert to an array
				this.props.stateHandle({cardArr: cardsArray});
			});
			this.setState({message:''});
		} else {
			this.setState({message:'Enter a bet amount'});
		}
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

		const {stage,bet,cards} = this.state;
		return (<div className="action-buttons-container">
			<div className="bet-message">{this.state.message}</div>
			<div className="bet-amount">
				<label htmlFor="betAmount">Bet amount</label>
				<input name="betAmount" onChange={e=>this.preventValueExceeding(e)} type="number" min="5"/>
			</div>
			<div className="btn-wrapper">
				<button className={stage !== "deal" ? "hide-btn" : 'extended-btn'} onClick={()=>this.dealCards()}>Deal</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.hit()}>Hit</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.stand()}>Stand</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.doubleDown()}>Double Down</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.split()}>Split</button>
			</div>
		</div>)
	}
}

export default ActionButtons;
