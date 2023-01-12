import React from 'react';

import '../App.css';

const CommiteeCard = ({ props }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={process.env.PUBLIC_URL + props.ImagePath} className="CardImage" alt={props.FirstName} />
      </div>

      <div className='CardTitle'>
        <h3>
          {props.FirstName + ' ' + props.LastName}
        </h3>
        <h5>
          {props.Title}
        </h5>
      </div>

      <div className='CardText'>
        <p>
          {props.Intro}
        </p>
      </div>
    </div>
  )
}

export default CommiteeCard