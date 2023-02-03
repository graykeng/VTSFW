import React from 'react';

import './style/SponsorCard.css';

const SponsorCard = ( props ) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={props.SponsorsInfo.ImagePath} className="SponsorCardImage" alt={props.SponsorsInfo.SponsorEng} />
      </div>

      <div className='CardTitle'>
        <p>
        <a href={props.SponsorsInfo.Web} target="_blank" rel="noopener noreferrer" className='SponsorWeb'>{props.SponsorsInfo.SponsorEng}</a>
        </p>
        <p>
          {props.SponsorsInfo.SponsorChn}
        </p>
      </div>
    </div>
  )
}

export default SponsorCard