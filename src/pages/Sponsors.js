import React from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';

const Sponsors = () => {
  return (
    <div>
      <Helmet>
          <title>VTSF | Sponsors</title>
      </Helmet>
      <Tabs defaultActiveKey="VTSF 2022" className="mt-3 mb-5" fill>
        <Tab eventKey="VTSF 2022" title="VTSF 2022">

        </Tab>
        <Tab eventKey="VTSF 2023" title="VTSF 2023">
            
        </Tab>
        <Tab eventKey="VTSF 2024" title="VTSF 2024" disabled>
            
        </Tab>
      </Tabs>
    </div>
  )
}

export default Sponsors