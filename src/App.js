import React, { Component } from 'react';
import Header from './Header/Header';
import BlackjackTable from './Blackjack-table/Blackjack-table';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Header />
       <BlackjackTable />
      </div>);
  }
}

export default App;
