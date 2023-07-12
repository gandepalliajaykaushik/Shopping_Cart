import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = product => {
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Product Selection</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
