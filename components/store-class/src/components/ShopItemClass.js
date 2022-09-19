import React from 'react';
import PropTypes from 'prop-types';
import ShopItemModel from '../models/ShopItemModel';

class ShopItemClass extends React.Component {
  render() {
    const shopItem = this.props.item;

    return (
      <div class="main-content">
        <h2>{shopItem.brand}</h2>
        <h1>{shopItem.title}</h1>
        <h3>{shopItem.description}</h3>
        <div class="description">
          {shopItem.descriptionFull}
        </div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{shopItem.currency}{shopItem.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  shopItem: PropTypes.instanceOf(ShopItemModel).isRequired,
}

export default ShopItemClass;