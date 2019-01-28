import React from 'react';

export default class BuildPhysicalCard extends React.Component {
  constructor(props){
    super(props);
  }
  
  // TODO: build the image and image container elements and assign the properties to them
  buildCardElement(cardProperties){
    let cardImage = document.createElement("img");
    cardImage.src = cardProperties.image;
    let cardContain = document.createElement("div");
    cardContain.setAttribute("class",cardProperties.classes);
    cardContain.innerHTML = cardImage;
  }

  // TODO Next (1/27/19): Build the card and render it with the proper styles including the animation
  // Need to test what card is being rendered, so we can add the hole card
  render() {
    const { index, cardToBeDealt: {
        value, 
        image, 
        classes, 
        styles}
      } = this.props;
    { if(index === 1){
      return(<div className="card">
        Normal Card {index} {value} {image} {classes}
      </div>);
      } else {
          return(<div className="card">
            Dealer's Hole Card {index} {value} {image} {classes}
      </div>);}
    }
  }
}