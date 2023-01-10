import React from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import '../App.css';

import { CommiteeInfo2022 } from '../info.js';
import CommiteeCard from '../component/CommiteeCard';

const Commitee = () => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Commitee</title>
        </Helmet>
        <Tabs defaultActiveKey="VTSF 2022" className="mt-3 mb-5" fill>
            <Tab eventKey="VTSF 2022" title="VTSF 2022">

                <div className='AllCards'>
                    <Row xs={1} md={2}>
                        {CommiteeInfo2022.map(CommiteeInfo2022 => (
                            <CommiteeCard info={CommiteeInfo2022} />
                        ))}
                    </Row>
                </div>

            </Tab>
            <Tab eventKey="VTSF 2023" title="VTSF 2023">
                
            </Tab>
            <Tab eventKey="VTSF 2024" title="VTSF 2024" disabled>
                
            </Tab>
        </Tabs>
    </div>
  )
}

export default Commitee