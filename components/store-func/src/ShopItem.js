export default function ShopItemFunc(prop) {
    return (
        <div className="main-content">
            <h2>{prop.item.brand}</h2>
            <h1>{prop.item.title}</h1>
            <h3> {prop.item.description}</h3>
            <div className="description">
                {prop.item.descriptionFull}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{prop.item.currency + prop.item.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>);
}