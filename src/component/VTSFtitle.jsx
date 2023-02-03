import React from 'react';

const VTSFtitle = ( props ) => {

  const VTSFPath = props.LogoPic.filter(val => val.Logo === 'VTSF').map(val => val.ImagePath).toString();

  function NotYet(){
    alert("We haven't started selling the ticket for 2023.");
  }
  
  return (
    <div>
      <nav className='Nav'>
        <div className='NavFirstSection'>
          <div className='NavImgSection'>
            <a href="/">
              <img
                alt=''
                src={VTSFPath}
                width='100'
                height='100'
                className='NavImg'
              />
              <img 
                alt=''
                src={VTSFPath}
                width='50'
                height='50'
                className='NavImgSmall'
              />
            </a>
          </div>
            <span className='NavText'>Vancouver Taiwanese Student Forum</span>
        </div>
        <div className='NavSecondSection'>
          <a href='/'>Home</a>
          <a href='/Blog'>Blog</a>
          <a href='/Committee'>Committee</a>
          <a href='/Sponsors'>Sponsors</a>
        </div>
        <button className='NavTicketButton' onClick={NotYet}>Get Ticket</button>
      </nav>
    </div>
  )
}

export default VTSFtitle
