import React from 'react';

import {
  Annie, Eric, Gray, Jason, Roger
} from '../image/CommiteePic/index.js';

import '../App.css';

const CommiteeCard = ({ id, name }) => {
  return (
    <div className='SingleCard'>
      <div >
        <img src={name} className="CardImage" />
      </div>
      <div className='CardText'>
        <h3>
          {name}
        </h3>
      </div>
      



    </div>
  )
}

export default CommiteeCard