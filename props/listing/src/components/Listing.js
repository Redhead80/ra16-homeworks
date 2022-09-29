function Listing(props) {
  const {items} = props;

  return (
    <div className="item-list">
      {items.map((item) => {
        if (item.state) {
          const title = item.state.length > 50 ? `${item.state.substring(0, 50)}...` : item.state;

          let price;
          if (item.currency_code === 'USD') {
            price = `$${item.price}`;
          } else if (item.currency_code === 'EUR') {
            price = `€${item.price}`;
          } else {
            price = `${item.price} ${item.currency_code}`;
          }

          let level;
          if (item.quantity <= 10) {
            level = "low";
          } else if (item.quantity > 20) {
            level = "high";
          } else {
            level = "medium";
          }
        
          return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt=""/>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{title}</p>
              <p className="item-price">{price}</p>
              <p className={`item-quantity level-${level}`}>{item.quantity} left</p>
            </div>
          </div>
          );
        } 

        return <div></div>;
      })}
    </div>
  );
}

export default Listing;
