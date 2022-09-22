function ShopItem(props) {
  const {card} = props;
  return (
    <div className="shop-item">
      <div className='shopItem-image'>
        <img src={card.img} alt=""></img>
      </div>
      <h3>{card.name}</h3>
      <div className="shopItem-color">{card.color}</div>
      <div className="shopItem-price">{'$' + card.price}</div>
      <button className="shopItem-button">Add to card</button>
    </div>
  )
}

export default ShopItem;
