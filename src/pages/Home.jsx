import React from 'react'
import { Helmet } from 'react-helmet'

import VTSFcarousel from '../component/VTSFcarousel'

import { EventDetailsChn, EventDetailsEng } from '../Data'

const Home = ( props ) => {
  return (
    <>
        <Helmet>
            <title>VTSF | Home</title>
        </Helmet>
        <div className='EventDetailsTitle'>
          Vancouver Taiwanese<br/>Student Forum
        </div>
        <div className='EventDetailsSubTitle'>
          溫哥華台灣學生論壇
        </div>
        <VTSFcarousel EventPic={ props.EventPic }/>
        <p className='EventDetailsEng'>
          {EventDetailsEng}
        </p>
        <p className='EventDetailsChn'>
          {EventDetailsChn}
        </p>
    </>
  )
}

export default Home