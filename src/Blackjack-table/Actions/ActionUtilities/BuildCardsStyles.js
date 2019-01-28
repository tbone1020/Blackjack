import React from 'react';

export default class BuildCardsStyles extends React.Component {
  static cardsProperties = {
    playerOffset: -50,
    dealerOffset: -50,
    animationDelay: -0.3
  }

  static updatePlayersStyles() {

    let offset = this.cardsProperties.playerOffset -= 25;
    let delay = this.cardsProperties.animationDelay += 0.3;

    return {
      right: 250,
      marginTop: offset,
      marginRight: offset,
      animationDelay: delay
    };
  }

  static updateDealersStyles() {
    let offset = this.cardsProperties.dealerOffset -= 25;
    let delay = this.cardsProperties.animationDelay += 0.3;

    return {
      right: 250,
      marginRight: offset,
      animationDelay: delay
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