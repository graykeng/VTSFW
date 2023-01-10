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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="CarouselSize"
          src={process.env.PUBLIC_URL + '/image/EventPic/DSC00961.jpg'}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="CarouselSize"
          src={process.env.PUBLIC_URL + '/image/EventPic/DSC01342.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default VTSFcarousel;