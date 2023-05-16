import React from 'react'
import { Helmet } from 'react-helmet'

import './style/Details.css'

const Details = ( props ) => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Details</title>
        </Helmet>
        <div className='details-main'>
          <div className='details-title'>
            關於我們 About Us
          </div>
          <div className='details-event-details-chn'>
            卑詩省台裔學生聯合會 (簡稱 BCTCSO) 創立於2022年。聯合溫哥華大學學生組織，本組織志在協助籍於卑詩省台灣僑居青年擴展跨領域交流，開拓生涯發展機會。期許透過聯合會舉辦的活動中，培養青年獨立思考和判斷能力，並行動為未來做準備。<br/><br/>
            今年的溫哥華台灣學生論壇將由 BCTCSO 主辦，聯合卑詩省最大的三個學生社團：<br/>
            University of British Columbia Taiwan Association (UBCTA)<br/>
            Simon Fraser University Taiwanese Association (SFUTA)<br/>
            Taiwanese Graduate Student Association (TGSA)
          </div>
          <div className='details-event-details-eng'>
            British Columbia Taiwanese Canadian Student Organization (BCTCSO, est 2022) aims to help BC Taiwanese youths engage and interact with leaders from multiple disciplines for a professional growth. The organization hopes to cultivate youth to develop critical thinking and inspire next generation of Taiwanese leaders through hosted events.<br/><br/>
            This year’s Vancouver Taiwanese Student Forum will be hosted by BCTCSO. Co-organized by the three biggest university Taiwanese student clubs: <br/>
            - University of British Columbia Taiwan Association (UBCTA)<br/>
            - Simon Fraser University Taiwanese Association (SFUTA)<br/>
            - Taiwanese Graduate Student Association (TGSA)

          </div>
          <div className='details-title'>
            論壇願景 Our Vision
          </div>
          <div className='details-event-details-chn'>
            溫哥華台灣學生論壇 (VTSF) 是一個讓青年學子與學術界、商業界和政治界的台裔領袖共同研討與交流的平台，從而促進專業性成長。 本論壇形式涵蓋主題演講以及多元文化的講座，內容皆是為大專院校生所量身打造。 <br/>
            期盼透過此論壇讓學生與專家們切磋交流，並藉由講者們的經驗分享和指引，產生重要的影響與啟發。 創立此論壇的目的不僅是促進台灣留學生與業界專業人士的相互交流的機會，更期待此活動能將台灣群體齊聚一堂，在相互扶持之際，凝聚台灣精神。
          </div>
          <div className='details-event-details-eng'>
            The Vancouver Taiwanese Student Forum (VTSF) is a platform for students to engage in professional development with leaders of Taiwanese heritage in the industry, academia, and the government. The core of this forum includes speeches and workshops covering diverse topics tailored to post-secondary students. Students will interact actively with experts from different fields and be able to reflect and enhance their personal development. <br/>
            This bilingual forum is well regarded as an ambitious endeavour to allow for the mentoring of young scholars with Taiwanese descent. We envision this platform to expand through the local communities embracing rich dialogue from the Taiwanese to the World.
          </div>
        </div>
    </div>
  )
}

export default Details