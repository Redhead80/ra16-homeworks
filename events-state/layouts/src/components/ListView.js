import ShopItem from './ShopItem';

function ListView(props) {
  const {cards} = props;

  return (
    <div className="list-view">
        {cards.map((card, index) => {
          return <ShopItem key={index} card={card}></ShopItem>
        })}
    </div>
  )
}

export default ListView;
