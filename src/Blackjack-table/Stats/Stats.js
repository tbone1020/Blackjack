import React from 'react';
import './Stats.css';

const Stats = props => {
	let countClass = props.isCounting.toString() === 'false' ? 'hide-count' : null;

	return (<div className="stats-container">
		<ul className="stats-list"> 
			<li>
				<strong>Bank :</strong> ${props.totalMoney}
			</li>
			<li className={countClass}>
				<strong>Count:</strong> {props.count}
			</li>
		</ul>
	</div>)
}

export default Stats;
