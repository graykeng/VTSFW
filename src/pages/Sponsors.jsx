import React from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import SponsorCard from '../component/SponsorCard';
import './style/Sponsors.css';

const Sponsors = ( props ) => {
  
  return (
    <div>
      <Helmet>
          <title>VTSF | Sponsors</title>
      </Helmet>
      <Tabs defaultActiveKey="VTSF 2022" className="mt-3 mb-5" fill>
        <Tab eventKey="VTSF 2022" title="VTSF 2022">
          <div className='AllCards'>
              <h1 className='SponsorRank'>PLATINUM</h1>
              <hr/>
              <Row xs={1} sm={1} md={2}>
                {/* filter the SponsorsInfo and get platinum sponsors in 2022 */}
                {props.SponsorsInfo.filter(val => val.SponsorRank === "platinum" && val.id >= 20220000 && val.id <=20229999).map((val, key) => (
                  <SponsorCard key={val.id} SponsorsInfo={val} />
                ))}
              </Row>

              <h1 className='SponsorRank'>GOLD</h1>
              <hr/>
              <Row xs={1} sm={1} md={2}>
                {/* filter the SponsorsInfo and get gold sponsors in 2022 */}
                {props.SponsorsInfo.filter(val => val.SponsorRank === "gold" && val.id >= 20220000 && val.id <= 20229999).map((val, key) => (
                  <SponsorCard key={val.id} SponsorsInfo={val} />
                ))}
              </Row>
              
              <h1 className='SponsorRank'>SILVER</h1>
              <hr/>
              <Row xs={1} sm={1} md={2}>
                {/* filter the SponsorsInfo and get silver sponsors in 2022 */}
                {props.SponsorsInfo.filter(val => val.SponsorRank === "silver" && val.id >= 20220000 && val.id <= 20229999).map((val, key) => (
                  <SponsorCard key={val.id} SponsorsInfo={val} />
                ))}
              </Row>

              <h1 className='SponsorRank'>BRONZE</h1>
              <hr/>
              <Row xs={1} sm={1} md={2}>
                {/* filter the SponsorsInfo and get bronze     sponsors in 2022 */}
                {props.SponsorsInfo.filter(val => val.SponsorRank === "bronze" && val.id >= 20220000 && val.id <= 20229999).map((val, key) => (
                  <SponsorCard key={val.id} SponsorsInfo={val} />
                ))}
              </Row>
          </div>
        </Tab>
        <Tab eventKey="VTSF 2023" title="VTSF 2023" disabled>
            
        </Tab>
        {/* <Tab eventKey="VTSF 2024" title="VTSF 2024" disabled>
            
        </Tab> */}
      </Tabs>
    </div>
  )
}
export default Sponsors