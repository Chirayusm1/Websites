import React from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
