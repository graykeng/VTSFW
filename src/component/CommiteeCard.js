import React from 'react';

import '../App.css';

const CommiteeCard = ( props ) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={props.CommiteeInfo.ImagePath} className="CardImage" alt={props.CommiteeInfo.FirstName} />
      </div>

      <div className='CardTitle'>
        <h3>
          {props.CommiteeInfo.FirstName + ' ' + props.CommiteeInfo.LastName}
        </h3>
        <h5>
          {props.CommiteeInfo.Title}
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

export default CommiteeCard