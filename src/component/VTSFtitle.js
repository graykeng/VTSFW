import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import VTSFLogo from '../image/logo.jpg';
import instagramLogo from '../image/instagramLogo.jpg';
import facebookLogo from '../image/facebookLogo.jpg';

const VTSFtitle = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=''
              src={VTSFLogo}
              width='30'
              height='30'
              className="d-inline-block align-top"
            />{' '}
            <span className=''>VTSF</span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="https://www.instagram.com/vtsf2022/" target="_blank">
              <img
                alt=''
                src={instagramLogo}
                width='30'
                height='30'
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Brand href="https://www.facebook.com/Vancouver-Taiwanese-Student-Forum-VTSF-108853708309621" target="_blank">
              <img
                alt=''
                src={facebookLogo}
                width='30'
                height='30'
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default VTSFtitle
