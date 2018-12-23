import React, { Component } from 'react';
import './ActionButtons.css';

/*  */
class ActionButtons extends Component {

	constructor(props){
		super(props);
		this.state = {
			stage:'deal',
			betAmount: null,
			additionalCardClasses:'',
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

	getCards(numberOfCards){
		return fetch(`https://deckofcardsapi.com/api/deck/${this.props.deck_id}/draw/?count=${numberOfCards}`)
			.then(response => response.json())
			.then(json => json.cards);
	}

	determindCardValue(cardVal){
		if(cardVal === "ACE") return [1,11];
		const tens = ["10","JACK","QUEEN","KING"];
		if(tens.indexOf(cardVal) !== -1){ 
			return 10;
		} else {
			return parseInt(cardVal);
		}
	}	

	dealCards(){
		const dealNumOfCards = 4;
		const betAmount = this.state.betAmount;
		let playerCardValues = 0;
		let dealerCardValues = 0;

		// 1. Deal 4 cards
		if(betAmount !== null && betAmount !== ''){		
			// Also have to lock the the bet amount
			this.getCards(dealNumOfCards).then(cards => {
				
				// 2. Grab all there values and add to the count and the players and dealers values.
				const sourceArray = cards.map((cardObj,cardIndex)=>{

					/*  TO DO: You created the card object. Need to display the cards on the page
						with the proper classes

				   	How will I handle Aces?
				   	------ 
					store image properties for later use*/
					// let cardValue = cardObj.
					let cardValue = this.determindCardValue(cardObj.value);
					if(cardIndex % 2 === 0) {
						return {src:cardObj.image, classes:'card to-player',value:cardValue};
					} else {
						return {src:cardObj.image, classes:'card to-dealer',value:cardValue};
					}
					console.log(cardObj);

				});
				console.log(sourceArray);
				// convert to an array
				this.props.parentState({cardValues: sourceArray});
			});
			this.setState({message:''});
			// 3. Hide "Deal" then show the rest of the action buttons
			this.setState({stage:'player'});
		} else {
			this.setState({message:'Enter a bet amount'});
		}
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
