import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div>
      <div className="product-card">
      <img src={product.image} alt={product.name} className="product"/>
      {/* <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button> */}
    </div>
    <div className="product-details">
        <h5>{product.name}</h5>
        <p>₹{product.price.toFixed(2)}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
    
    
  );
}

export default Product;
