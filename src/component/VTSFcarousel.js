import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function VTSFcarousel({ EventPic }) {
  return (
    <Carousel fade>
      
      {EventPic.filter(val => val.InPage === 'Carousel').map((val) => (
        <Carousel.Item interval={2000} key={val.id}>
          <img
            className="CarouselSize"
            src={val.ImagePath}
            alt={val.id}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default VTSFcarousel;