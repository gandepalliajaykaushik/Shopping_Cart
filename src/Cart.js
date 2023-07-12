import React from 'react';
import './cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div id="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul id="cart-items">
            {cartItems.map(product => (
              <li key={product.id}>
                <span>{product.title}</span>
                <span>${product.price}</span>
                <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p id="total-price">
            Total Price: ${cartItems.reduce((total, product) => total + product.price, 0)}
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
