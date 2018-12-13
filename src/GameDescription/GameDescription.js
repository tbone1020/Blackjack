import React, { Component } from 'react';
import './GameDescription.css';

class GameDescription extends Component {
	render() {
		return (
		<div className="game-description">
			<hr />
			<h4>The Rules of Blackjack</h4>
			<ul>
				<li>Have a higher card total than the dealer without going over 21.</li>
				<li>Face cards (Jacks, Queens, and Kings) count as 10, Aces count as 1 or 11.</li>
				<li>A Blackjack consists of a 10 and an Ace on the initial deal.</li>
				<li>Similar totals result in a tie (a push).</li>
			</ul>
		</div>);
  	}
}

export default GameDescription;