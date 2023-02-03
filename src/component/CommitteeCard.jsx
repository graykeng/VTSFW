import React from 'react';

import './CommitteeCard.css';

const CommitteeCard = ( props ) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={props.CommitteeInfo.ImagePath} className="CardImage" alt={props.CommitteeInfo.FirstName} />
      </div>

      <div className='CommitteeCardTitle'>
        <h3>
          {props.CommitteeInfo.FirstName + ' ' + props.CommitteeInfo.LastName}
        </h3>
        <h5>
          {props.CommitteeInfo.Title}
        </h5>
      </div>

      {/* <div className='CardText'>
        <p>
          {props.Intro}
        </p>
      </div> */}
    </div>
  )
}

export default CommitteeCard