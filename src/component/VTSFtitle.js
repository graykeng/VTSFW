import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const VTSFtitle = ( props ) => {

  const VTSFPath = props.LogoPic.filter(val => val.Logo === 'VTSF').map(val => val.ImagePath).toString();
  const InstagramPath = props.LogoPic.filter(val => val.Logo === 'Instagram').map(val => val.ImagePath).toString();
  const FacebookPath = props.LogoPic.filter(val => val.Logo === 'Facebook').map(val => val.ImagePath).toString();

  function NotYet(){
    alert("We haven't started selling the ticket for 2023.");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=''
              src={VTSFPath}
              width='40'
              height='40'
              className="d-inline-block align-top"
            />{' '}
            <span className='TitleText'>VTSF</span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
              <Button variant="primary" onClick={NotYet}>Buy Ticket</Button>
            </Navbar.Brand>
            <Navbar.Brand href="https://www.instagram.com/vtsf2022/" target="_blank">
              <img
                alt=''
                src={InstagramPath}
                width='30'
                height='30'
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Brand href="https://www.facebook.com/Vancouver-Taiwanese-Student-Forum-VTSF-108853708309621" target="_blank">
              <img
                alt=''
                src={FacebookPath}
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
