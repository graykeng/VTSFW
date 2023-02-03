import React from 'react'
import { Helmet } from 'react-helmet'

import VTSFcarousel from '../component/VTSFcarousel';
import { EventDetailsChn, EventDetailsEng } from '../Data';
import './style/Home.css';

const Home = ( props ) => {
  return (
    <>
        <Helmet>
            <title>VTSF | Home</title>
        </Helmet>
        <div className='HomeTitle'>
          Vancouver Taiwanese<br/>Student Forum
        </div>
        <div className='HomeSubTitle'>
          溫哥華台灣學生論壇
        </div>
        <VTSFcarousel EventPic={ props.EventPic }/>
        <p className='IntroEng'>
          {EventDetailsEng}
        </p>
        <p className='IntroChn'>
          {EventDetailsChn}
        </p>
    </>
  )
}

export default Home