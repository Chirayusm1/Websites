import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import product1 from './Image/product1.jpeg'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change the speed as needed
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={product1} alt="Slide 1" />
        </div>
        <div>
          <img src={product1} alt="Slide 2" />
        </div>
        <div>
          <img src={product1} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
