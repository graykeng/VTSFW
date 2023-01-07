import React from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../App.css';

import logo from "../image/logo.jpg";
import CommiteeCard from '../component/CommiteeCard';

const CommiteeNames = [
    { id: 1, name: "Gray" },
    { id: 2, name: "Annie" },
    { id: 3, name: "Eric" },
    { id: 4, name: "Roger" },
    { id: 5, name: "Jason" },
    { id: 6, name: "Jennie" }
]

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
                        {CommiteeNames.map(CommiteeNames => (
                            <CommiteeCard key={CommiteeNames.id} id={CommiteeNames.id} name={CommiteeNames.name} />
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