import React from 'react';
import { formatPrice } from '../../helpers';
import './ShopItem.css';

function ShopItem({
  name,
  price,
  image,
  description,
  available,
}) {
  const isAvailable = available === 'available';
  return(
    <div className="shop-item">
      <img src={image} alt={name} className="shop-item__image" />
      <div className="shop-item__content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="shop-item__price">{formatPrice(price)}</span>
        {isAvailable && (
          <button type="button">Add to cart</button>
        )}
        {!isAvailable && (
          <button type="button" disabled>Sold out</button>
        )}
      </div>
    </div>
  );
}

export default ShopItem;