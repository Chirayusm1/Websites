import React from 'react';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Footer from './Component/Footer';
import ImageCarousel from './Component/ImageCarousel';
import ProductList1 from './Component/ProductList1';
import DualContainer from './Component/DualContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageCarousel />
      <DualContainer /> 
      <ProductList1 />

      {/* <main>
        
        <ProductList />
      </main> */}
      <Footer />
    </div>
  );
}

export default App;
