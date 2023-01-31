import React from 'react'
import { Helmet } from 'react-helmet'

import VTSFcarousel from '../component/VTSFcarousel'

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
          The inaugural Vancouver Taiwanese Student Forum (VTSF) is a platform for students to engage in professional development with leaders in various sectors including industry, academia, and the government. The core of the event includes keynote speeches and professional workshops which are specifically designed for students currently enrolled in a post-secondary degree/diploma. This bilingual in-person event is a pioneer effort and ambitious endeavor to bring together the Taiwanese community. The goal of this platform is to allow for the sharing of experiences and the mentoring of young scholars with a Taiwanese descent who may have grown up in diverse backgrounds.
        </p>
        <p className='EventDetailsChn'>
          溫哥華台灣學生論壇 (VTSF) 是一個讓台灣青年學子與來自學術界、商業界、工業界和政治界的菁英領導者共同研討與相互交流經驗的平台，從而促進各自的專業成長。這場論壇的形式將涵蓋一場主題演講和六場各領域專題研討會，橫跨了科技、媒體、新創、社交、企業營運與銜接亞洲六個範疇。此六場專題演講的內容皆是為目前就讀大專院校與研究所學生所量身打造，希望透過此論壇的辦理，讓學生能與該領域的專家和菁英切磋交流，並藉由反思講者們的經驗分享和指引，產生重要的影響與啟發。創立這場雙語論壇的主要目的不僅僅是促進台灣學生與業界專業人士的相互交流機會，更希冀這場論壇能將台灣群體齊聚一堂，在相互扶持之際，凝聚台灣精神。
        </p>
    </>
  )
}

export default Home