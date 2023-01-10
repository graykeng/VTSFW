import React from 'react';

import '../App.css';

const CommiteeCard = ({ info }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={info.pic} className="CardImage" alt={info.name} />
      </div>

      <div className='CardTitle'>
        <h3>
          {info.name}
        </h3>
        <h5>
          {info.title}
        </h5>
      </div>


      <div className='CardText'>
        <p>
          {info.name}
        </p>
      </div>
      



    </div>
  )
}

export default CommiteeCard