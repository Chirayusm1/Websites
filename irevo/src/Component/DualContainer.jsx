import React from 'react';
import './DualContainer.css';
import chiki from './Image/chiki.jpeg'
import atta from './Image/atta.jpeg'

const DualContainer = () => {
  return (
    <div className="dual-container">
      <div className="box">
        <h2>Artisanal Delights</h2>
        <div>
        <p>Organic Sesame and Peanut Jaggery Chikki</p>
        </div>
        <table>
          <tr><td>
             <button className="explore-button">Shop Now</button>  
            </td>
            <td className='chiki'>
              <img src={chiki} alt="Artisanal Delights" /> 
            </td>
            </tr>
        </table>
      </div> 
      <div className="box">
        <p>Savor the nutritious richness of our Organic Low GI Rice and 7 Grain Multigrain Atta, bringing wholesome, flavorful, and sustainable choices to your table.</p>
         <table>
          <tr><td>
          <button className="explore-button">Explore More</button>
            </td>
            <td className='atta'>
              <img src={atta} alt="Artisanal Delights" /> 
            </td>
            </tr>
        </table>
      </div>
      
    </div>
  );
}

export default DualContainer;
