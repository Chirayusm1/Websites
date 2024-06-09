import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import product1 from './Image/product1.png';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <table className="slide-table">
            <tbody>
              <tr>
              <td className="text-cell">
                  <h1>Last Forest Natural Products</h1>
                  <p>Explore our range of sustainably sourced products: sweet Nilgiri honey infused with natural spices, beeswax solid perfumes and therapeutic body balms, handcrafted soaps and lip balms from the Nilgiris, and locally produced essential oils for holistic care..</p>
                </td>
                <td className="image-cell">
                  <img src={product1} alt="Slide 1" className="product-image" />
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <div className="carousel-slide">
          <table className="slide-table">
            <tbody>
              <tr>
                <td className="image-cell">
                  <img src={product1} alt="Slide 2" className="product-image" />
                </td>
                <td className="text-cell">
                  <h1>Product Title 2</h1>
                  <p>This is the product description for product 2. It is displayed next to the image.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="carousel-slide">
          <table className="slide-table">
            <tbody>
              <tr>
                <td className="image-cell">
                  <img src={product1} alt="Slide 3" className="product-image" />
                </td>
                <td className="text-cell">
                  <h1>Product Title 3</h1>
                  <p>This is the product description for product 3. It is displayed next to the image.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
