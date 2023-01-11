import React from 'react';

import '../App.css';

const SponsorCard = ({ info }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={process.env.PUBLIC_URL + info.ImagePath} className="SponsorCardImage" alt={info.SponsorEng} />
      </div>

      <div className='CardTitle'>
        <h3>
          {info.SponsorEng}
        </h3>
        <h3>
          {info.SponsorChn}
        </h3>
      </div>
    </div>
  )
}

export default SponsorCard