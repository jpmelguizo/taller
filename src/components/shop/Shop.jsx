import React from 'react';
import ShopItem from '../ShopItem/ShopItem';

function Shop({ items }) {
  return(
    <div className="shop">
      <h2>Shop</h2>
      {
        Object.keys(items).map(key => {
          return (
            <ShopItem key={key} {...items[key]} />
          );
        })
      }
    </div>
  );
}

export default Shop;