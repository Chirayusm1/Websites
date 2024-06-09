import React from 'react';
import './ProductList1.css';
import Product from './Product';
import soap from './Image/soap.jpeg';
import oil from './Image/oil.jpeg';
import wax from './Image/wax.jpeg';
import honey from './Image/honey.jpeg'



const products = [
    { id: 1, name: 'Pollen Enriched Wild Nilgiri Honey', price: 315, image: honey },
    { id: 2, name: 'Honeycomb Beewax Soap - Charcoal', price: 285, image: soap },
    { id: 3, name: 'Artisanal, Handmade Beewax Lip Balm - Mint', price: 260, image: wax },
    { id: 4, name: 'Aromatherapy Oil - Jojoba (Skin Care)', price: 225, image: oil },
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
