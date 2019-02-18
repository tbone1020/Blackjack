const CardProperties = {
  BuildCardProperties: (cardValue, cardImage, cardClass, cardStyles) => {
    const properties = Object.create({});
    properties.value = cardValue;
    properties.image = cardImage;
    properties.classes = cardClass;
    properties.styles = cardStyles;
    return properties;
  }
}
export default CardProperties;