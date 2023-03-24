import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, images.length, interval]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;