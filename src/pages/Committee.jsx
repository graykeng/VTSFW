import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import './style/Committee.css';

import CommitteeCard from '../component/CommitteeCard';

const Commitee = ( props ) => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div>
            <Helmet>
                <title>VTSF | Commitee</title>
            </Helmet>
            <Tabs defaultActiveKey="VTSF 2023" className="mt-3 mb-5" fill>
                <Tab eventKey="VTSF 2022" title="VTSF 2022">

                    <div className='AllCards'>
                        {isSmallScreen ? (
                            <Row>
                                {props.CommitteeInfo.filter(val => val.id > 20220000 && val.id <= 20230000).map((val, key) => (
                                    <CommitteeCard key={val.id} CommitteeInfo={val} LogoPic={ props.LogoPic } />
                                ))}
                            </Row>
                        ) : (
                            <Row xs={1} md={2}>
                            {props.CommitteeInfo.filter(val => val.id > 20220000 && val.id <= 20230000).map((val, key) => (
                                <CommitteeCard key={val.id} CommitteeInfo={val} LogoPic={ props.LogoPic } />
                            ))}
                        </Row>
                        )}
                    </div>

                </Tab>
                <Tab eventKey="VTSF 2023" title="VTSF 2023">
                    <div className='AllCards'>
                        {isSmallScreen ? (
                            <Row>
                                {props.CommitteeInfo.filter(val => val.id > 20230000 && val.id <= 20240000).map((val, key) => (
                                    <CommitteeCard key={val.id} CommitteeInfo={val} LogoPic={ props.LogoPic } />
                                ))}
                            </Row>
                        ) : (
                            <Row xs={1} md={2}>
                                {props.CommitteeInfo.filter(val => val.id > 20230000 && val.id <= 20240000).map((val, key) => (
                                    <CommitteeCard key={val.id} CommitteeInfo={val} LogoPic={ props.LogoPic } />
                                ))}
                            </Row>
                        )}
                    </div>
                </Tab>
                {/* <Tab eventKey="VTSF 2024" title="VTSF 2024" disabled>
                    
                </Tab> */}
            </Tabs>
        </div>
    )
}

export default Commitee