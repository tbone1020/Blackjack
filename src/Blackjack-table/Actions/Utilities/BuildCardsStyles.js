import React from 'react';

export default class BuildCardsStyles extends React.Component {
  static cardsProperties = {
    playerOffset: -20,
    dealerOffset: -20,
    animationDelay: -0.3
  }

  static updatePlayersStyles() {

    let offset = this.cardsProperties.playerOffset -= 27;
    let delay = this.cardsProperties.animationDelay += 0.3;
    
    return {
      right: 250,
      marginTop: offset,
      marginRight: offset,
      animationDelay: `${delay}s` // Set animation to seconds
    };
  }

  static updateDealersStyles() {
    let offset = this.cardsProperties.dealerOffset -= 35;
    let delay = this.cardsProperties.animationDelay += 0.3;

    return {
      right: 250,
      marginRight: offset,
      animationDelay: `${delay}s`
    };
  }  

  static resetCardOffsets(){
    this.cardsProperties = {
      playerOffset: -50,
      dealerOffset: -50,
      animationDelay: -0.3
    }
  }

}