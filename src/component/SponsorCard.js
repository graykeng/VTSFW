import React from 'react';

import '../App.css';

const SponsorCard = ({ props }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={process.env.PUBLIC_URL + props.ImagePath} className="SponsorCardImage" alt={props.SponsorEng} />
      </div>

      <div className='CardTitle'>
        <h5>
          {props.SponsorEng}
        </h5>
        <h5>
          {props.SponsorChn}
        </h5>
      </div>
    </div>
  )
}

export default SponsorCard