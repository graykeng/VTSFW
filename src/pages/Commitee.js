import React from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Axios from "axios";

import '../App.css';

import CommiteeCard from '../component/CommiteeCard';

const Commitee = () => {
    const [CommiteeInfo2022, setCommiteeInfo2022] = useState([]);
    const getCommiteeInfo2022 = () => {
        Axios.get("http://localhost:3001/CommiteeInfo2022").then((response) => {
            setCommiteeInfo2022(response.data);
        });
    };
    
    return (
        <div>
            <Helmet>
                <title>VTSF | Commitee</title>
            </Helmet>
            <Tabs defaultActiveKey="VTSF 2022" className="mt-3 mb-5" fill>
                <Tab eventKey="VTSF 2022" title="VTSF 2022">

                    <div className='AllCards'>
                        {useEffect(() => {
                            getCommiteeInfo2022();
                        }, [])}
                        <Row xs={1} md={2}>
                            {CommiteeInfo2022.map((val, key) => (
                                <CommiteeCard key={val.id} info={val} />
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

export default Commitee