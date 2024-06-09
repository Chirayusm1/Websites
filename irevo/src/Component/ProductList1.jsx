import React from 'react';
import './ProductList1.css';
import Product from './Product';


const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 50.99, image: 'https://via.placeholder.com/150' },
  ];

const ProductList1 = () => {
  return (
    <div className="large-container">
      <h1>Our Featured Products</h1>
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
}

export default ProductList1;
