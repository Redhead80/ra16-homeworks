import React from 'react';
import PropTypes from 'prop-types';
import ShopItemModel from '../models/ShopItemModel';

function ShopItemFunc(props) {
  const shopItem = props.item;

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

ShopItemFunc.propTypes = {
  shopItem: PropTypes.instanceOf(ShopItemModel).isRequired,
}

export default ShopItemFunc;