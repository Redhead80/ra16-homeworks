function ShopCard(props) {
  const {card} = props;
  return (
    <div className="shop-card">
      <h3>{card.name}</h3>
      <div className="shopCard-color">{card.color}</div>
      <img src={card.img} alt="" className="shopCard-image"></img>
      <div className='shopCard-wrapper'>
        <div className="shopCard-price">{'$' + card.price}</div>
        <button className="shopCard-button">Add to card</button>
      </div>
    </div>
  )
}

export default ShopCard;
