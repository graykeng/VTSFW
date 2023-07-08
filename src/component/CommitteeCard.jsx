import React from 'react';

import './style/CommitteeCard.css';

const CommitteeCard = ( props ) => {

  const LinkedInPath = props.LogoPic.filter(val => val.Logo === 'LinkedIn').map(val => val.ImagePath).toString();

  return (
    <div className='CommitteeSingleCard'>
      <div>
        <img src={props.CommitteeInfo.ImagePath} className="CardImage" alt={props.CommitteeInfo.FirstName} />
      </div>

      <div className='CommitteeCardTitle'>
        <div className='CommitteeCardTitleWithLinkedInLogo'>
          <h3>
            {props.CommitteeInfo.FirstName + ' ' + props.CommitteeInfo.LastName}
          </h3>
          <div className='LinkedIn'>
            <a href={props.CommitteeInfo.LinkedInPath} target="_blank" rel="noopener noreferrer" className='Logo'><img width='25' height='25' src={LinkedInPath} alt="Linkedin Logo"/></a>
          </div>
        </div>
        <h5>
          {props.CommitteeInfo.Title}
        </h5>
      </div>

      <div className='CardText'>
        <p>
        {props.CommitteeInfo.Intro.split('\n').map((text, index) => (
          <React.Fragment key={index}>
            {text}
            <br />
          </React.Fragment>
        ))}
        </p>
      </div>
    </div>
  )
}

export default CommitteeCard