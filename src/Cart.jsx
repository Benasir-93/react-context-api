// src/components/Cart.js

import React from 'react';
import { useProductContext } from './Context';

const Cart = () => {
  const { products } = useProductContext();

  return (
    <div className="cart-container">
      {products.map(product => (
        <div key={product.id} className="cart-item">
          {/* <img src={product.thumbnail} alt={product.title} /> */}
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          {/* You can add more details here */}
        </div>
      ))}
    </div>
  );
};

export default Cart;
