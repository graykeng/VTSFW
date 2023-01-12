import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Axios from "axios";

import SponsorCard from '../component/SponsorCard';

const Sponsors = () => {
  const [SponsorsInfo2022, setSponsorsInfo2022] = useState([]);
    const getSponsorsInfo2022 = () => {
      Axios.get("http://localhost:3001/SponsorsInfo2022").then((response) => {
        setSponsorsInfo2022(response.data);
    });
  };

  return (
    <div>
      <Helmet>
          <title>VTSF | Sponsors</title>
      </Helmet>
      <Tabs defaultActiveKey="VTSF 2022" className="mt-3 mb-5" fill>
        <Tab eventKey="VTSF 2022" title="VTSF 2022">
          <div className='AllCards'>
              {useEffect(() => {
                  getSponsorsInfo2022();
              }, [])}
              <h1 className='SponsorRank'>PLATINUM</h1>
              <hr/>
              <Row xs={1} md={2}>
                {SponsorsInfo2022.filter(val => val.SponsorRank === "platinum" && val.id >= 20220000 && val.id <=20229999).map((val, key) => (
                  <SponsorCard key={val.id} props={val} />
                ))}
              </Row>

              <h1 className='SponsorRank'>GOLD</h1>
              <hr/>
              <Row xs={1} md={2}>
                {SponsorsInfo2022.filter(val => val.SponsorRank === "gold").map((val, key) => (
                  <SponsorCard key={val.id} props={val} />
                ))}
              </Row>
              
              <h1 className='SponsorRank'>SILVER</h1>
              <hr/>
              <Row xs={1} md={2}>
                {SponsorsInfo2022.filter(val => val.SponsorRank === "silver").map((val, key) => (
                  <SponsorCard key={val.id} props={val} />
                ))}
              </Row>

              <h1 className='SponsorRank'>BRONZE</h1>
              <hr/>
              <Row xs={1} md={2}>
                {SponsorsInfo2022.filter(val => val.SponsorRank === "bronze").map((val, key) => (
                  <SponsorCard key={val.id} props={val} />
                ))}
              </Row>
          </div>
        </Tab>
        <Tab eventKey="VTSF 2023" title="VTSF 2023" disabled>
            
        </Tab>
        <Tab eventKey="VTSF 2024" title="VTSF 2024" disabled>
            
        </Tab>
      </Tabs>
    </div>
  )
}

export default Sponsors