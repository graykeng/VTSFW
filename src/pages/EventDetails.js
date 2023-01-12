import React from 'react'
import { Helmet } from 'react-helmet'

const EventDetails = () => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Event Details</title>
        </Helmet>
        <div className='EventDetailsTitle'>
          Vancouver Taiwanese<br/>Student Forum
        </div>
        <div className='EventDetailsSubTitle'>
          溫哥華台灣學生論壇
        </div>
        <p className='EventDetailsEng'>
          The inaugural Vancouver Taiwanese Student Forum (VTSF) is a platform for students to engage in professional development with leaders in various sectors including industry, academia, and the government. The core of the event includes keynote speeches and professional workshops which are specifically designed for students currently enrolled in a post-secondary degree/diploma. This bilingual in-person event is a pioneer effort and ambitious endeavor to bring together the Taiwanese community. The goal of this platform is to allow for the sharing of experiences and the mentoring of young scholars with a Taiwanese descent who may have grown up in diverse backgrounds.
        </p>
    </div>
  )
}

export default EventDetails