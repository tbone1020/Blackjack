import React, { Component } from 'react';
import Header from './Header/Header';
import GameDescription from './GameDescription/GameDescription';
import BlackjackTable from './Blackjack-table/Blackjack-table';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="container">
       <Header />
       <GameDescription />
       <BlackjackTable />
      </main>);
  }
}
