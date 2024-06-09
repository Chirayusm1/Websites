import React from 'react';
import './DualContainer.css';

const DualContainer = () => {
  return (
    <div className="dual-container">
      <div className="box">
        <h2>Artisanal Delights</h2>
        <p>Organic Sesame and Peanut Jaggery Chikki</p>
        <button className="explore-button">Shop Now</button>
      </div>
      <div className="box">
        {/* <h2>Container 2</h2> */}
        <p>Savor the nutritious richness of our Organic Low GI Rice and 7 Grain Multigrain Atta, bringing wholesome, flavorful, and sustainable choices to your table.</p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
}

export default DualContainer;
