import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
// import ProductList from './Component/ProductList';
import Footer from './Component/Footer';
import ImageCarousel from './Component/ImageCarousel';
import ProductList1 from './Component/ProductList1';
import DualContainer from './Component/DualContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ImageCarousel />
        <DualContainer />
        <Routes>
          {/* <Route path="/" element={<ProductList1 />} />
          <Route path="/shop" element={<ProductList1 />} /> */}
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/faqs" element={<div>FAQs</div>} />
          {/* Add additional routes here as needed */}
        </Routes>
         <main>
        
        <ProductList1 />
      </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;