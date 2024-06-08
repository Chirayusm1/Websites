import React from 'react';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Footer from './Component/Footer';
import ImageCarousel from './Component/ImageCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageCarousel />
      <main>
        {/* <h1>Welcome to Our Shop</h1> */}
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;