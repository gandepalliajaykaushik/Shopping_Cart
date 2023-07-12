import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productlist.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const apiEndpoint = 'https://fakestoreapi.com/products';
  
    axios.get(apiEndpoint)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div id="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
