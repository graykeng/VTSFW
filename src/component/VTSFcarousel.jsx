import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './style/VTSFcarousel.css';

function VTSFcarousel( props ) {
  return (
    <Carousel fade>
      {props.EventPic.filter(val => val.InPage === 'Carousel').map((val) => (
        <Carousel.Item interval={2000} key={val.id}>
          <img
            className="CarouselHomePage"
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