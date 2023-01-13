import React from 'react';

import '../App.css';

const SponsorCard = ({ props }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={props.ImagePath} className="SponsorCardImage" alt={props.SponsorEng} />
        {console.log(props.ImagePath)}
      </div>

      <div className='CardTitle'>
        <p>
        <a href={props.Web} target="_blank" rel="noopener noreferrer" className='SponsorWeb'>{props.SponsorEng}</a>
        </p>
        <p>
          {props.SponsorChn}
        </p>
      </div>
    </div>
  )
}

export default SponsorCard