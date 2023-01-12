import React from 'react';

import '../App.css';

const SponsorCard = ({ props }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={process.env.PUBLIC_URL + props.ImagePath} className="SponsorCardImage" alt={props.SponsorEng} />
      </div>

      <div className='CardTitle'>
        <h3>
          {props.SponsorEng}
        </h3>
        <h3>
          {props.SponsorChn}
        </h3>
      </div>
    </div>
  )
}

export default SponsorCard