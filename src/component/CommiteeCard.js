import React from 'react';

import '../App.css';

const CommiteeCard = ({ info }) => {

  return (
    <div className='SingleCard'>
      <div>
        <img src={process.env.PUBLIC_URL + info.ImagePath} className="CardImage" alt={info.FirstName} />
      </div>

      <div className='CardTitle'>
        <h3>
          {info.FirstName + ' ' + info.LastName}
        </h3>
        <h5>
          {info.Title}
        </h5>
      </div>


      <div className='CardText'>
        <p>
          {info.LastName}
        </p>
      </div>
      



    </div>
  )
}

export default CommiteeCard