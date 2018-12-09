import React, { Component } from 'react';
import './GameDescription.css';

class GameDescription extends Component {
	render() {
		return (
		<p className="game-description">
            <h4>The Rules of Blackjack</h4>
            <ul>
			    <li>The object of Blackjack is to have a higher card value than the dealer without going over 21.</li>
				<li>Face cards (Jacks, Queens, and Kings) count as 10, Aces count as 1 or 11.</li>
				<li>A Blackjack consists of a 10 and an Ace on the initial deal.</li>
				<li>Similar values results in a push (Tie).</li>
			</ul>
		</p>);
  	}
}

export default GameDescription;