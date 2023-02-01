import React from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import '../App.css';

import CommitteeCard from '../component/CommitteeCard';

const Commitee = ( props ) => {

    return (
        <div>
            <Helmet>
                <title>VTSF | Commitee</title>
            </Helmet>
            <Tabs defaultActiveKey="VTSF 2022" className="mt-3 mb-5" fill>
                <Tab eventKey="VTSF 2022" title="VTSF 2022">

                    <div className='AllCards'>
                        <Row xs={1} md={2}>
                            {props.CommitteeInfo.filter(val => val.id > 20220000 && val.id <= 20230000).map((val, key) => (
                                <CommitteeCard key={val.id} CommitteeInfo={val} />
                            ))}
                        </Row>
                    </div>

                </Tab>
                <Tab eventKey="VTSF 2023" title="VTSF 2023">
                    <div className='AllCards'>
                        <Row xs={1} md={2}>
                            {props.CommitteeInfo.filter(val => val.id > 20230000 && val.id <= 20240000).map((val, key) => (
                                <CommitteeCard key={val.id} CommitteeInfo={val} />
                            ))}
                        </Row>
                    </div>
                </Tab>
                {/* <Tab eventKey="VTSF 2024" title="VTSF 2024" disabled>
                    
                </Tab> */}
            </Tabs>
        </div>
    )
}

export default Commitee