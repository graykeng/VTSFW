import React, { useState, useEffect } from 'react';

import './style/PostCarousel.css';

const PostCarousel = (props) => {
  const imagePaths = props.ImageArr
    .map(val => val);

  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(intervalId);
    };
  }, [imagePaths.length]);

  const startTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagePaths.length);
    }, 3000);
    setIntervalId(newIntervalId);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + imagePaths.length) % imagePaths.length);
    startTimer();
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % imagePaths.length);
    startTimer();
  };

  return (
    <div>
      <div className="carousel-container">
        <div className='carousel-inner'>
          <button className='post-prevButton' onClick={handlePrev}></button>
          <button className='post-nextButton' onClick={handleNext}></button>
          <img src={imagePaths[currentImage]} alt="carousel" />
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;