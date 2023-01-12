import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function VTSFcarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="CarouselSize"
          src={process.env.PUBLIC_URL + '/image/EventPic/DSC00941.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="CarouselSize"
          src={process.env.PUBLIC_URL + '/image/EventPic/DSC00961.jpg'}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="CarouselSize"
          src={process.env.PUBLIC_URL + '/image/EventPic/DSC01342.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default VTSFcarousel;