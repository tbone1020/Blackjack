import React from 'react';
import cardBack from '../../../images/Card-back-maldives.png';

export default class BuildPhysicalCard extends React.Component {

    buildCardElement(cardProperties) {
        let cardImage = document.createElement("img");
        cardImage.src = cardProperties.image;
        let cardContain = document.createElement("div");
        cardContain.setAttribute("class", cardProperties.classes);
        cardContain.innerHTML = cardImage;
    }

    render() {
        const { index, cardToBeDealt: { value, image, classes, styles } } = this.props;
        if (index !== 1) {
            return (<div style={styles} className={`${classes} hole-card card_${index}`}> <img alt={value} src={image} /> </div>);
        } else {
            // Dealers hole card
            return (<div style={styles} className={`${classes} card_${index}`}> 
                    <div className="flip-card-front"> <img alt="card back" src={cardBack} /> </div>
                    <div className="flip-card-back"> <img alt={value} src={image} alt="hole card" /> </div>
                </div>);
        }
    }
}