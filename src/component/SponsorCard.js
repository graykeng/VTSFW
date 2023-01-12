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
        <a href={props.Web} target="_blank" rel="noopener noreferrer" className='SponsorWeb'>{props.SponsorEng}</a>
        </h5>
        <h5>
          {props.SponsorChn}
        </h5>
      </div>
    </div>
  )
}

export default SponsorCard