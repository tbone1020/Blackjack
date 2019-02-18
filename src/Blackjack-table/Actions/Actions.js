import React, { Component } from 'react';
import DealCards from './DealCards';
import './Actions.css';

class Actions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stage: 'deal',
            betAmount: null,
            message: ''

        }
    }

    preventValueExceeding(e) {
        if (parseInt(e.target.value) > this.props.totalMoney) {
            e.target.value = this.props.totalMoney;
            this.setState({ betAmount: e.target.value });
        } else {
            this.setState({ betAmount: e.target.value });
        }
    }

    calculateCardCountingValue(card) {

    }

    getCards(numberOfCards) {
        return fetch(`https://deckofcardsapi.com/api/deck/${this.props.deck_id}/draw/?count=${numberOfCards}`)
            .then(response => response.json())
            .then(json => json.cards);
    }

    determineCardValue(cardVal) {
        if (cardVal === "ACE") return [1, 11];
        const tens = ["JACK", "QUEEN", "KING"];
        return tens.indexOf(cardVal) !== -1 ? 10 : parseInt(cardVal);

    }
    
    render() {

        const { stage } = this.state;
        return (<div className="action-buttons-container">
			<div className="bet-message">{this.state.message}</div>
			<div className="bet-amount">
				<label htmlFor="betAmount">Bet amount</label>
				<input name="betAmount" onChange={e=>this.preventValueExceeding(e)} type="number" min="5"/>
			</div>
			<div className="btn-wrapper">
				<DealCards updateBJTableState={this.props.updateBJTableState}  deck_id={this.props.deck_id} stage={this.state.stage} />
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.hit()}>Hit</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.stand()}>Stand</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.doubleDown()}>Double Down</button>
				<button className={stage !== "player" ? "hide-btn" : null} onClick={()=>this.split()}>Split</button>
			</div>
		</div>)
    }
}

export default Actions;