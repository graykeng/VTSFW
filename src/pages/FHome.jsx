import React from 'react';

import FCarousel from '../component/FCarousel';

import './style/FHome.css';


const FHome = ( props ) => {
  return (
    <div className="App">
      <main>
        <div className="carousel">
          <FCarousel EventPic={props.EventPic} interval={3000} />
        </div>
        <div className='schedule'>

        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default FHome;
