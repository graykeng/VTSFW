import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const VTSFtitle = () => {

  function NotYet(){
    alert("We haven't started selling the ticket for 2023.")
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=''
              src={process.env.PUBLIC_URL + './image/logo.jpg'}
              width='30'
              height='30'
              className="d-inline-block align-top"
            />{' '}
            <span className=''>VTSF</span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
              <button variant="primary" onClick={NotYet} className="TicketButton">Buy Ticket</button>
            </Navbar.Brand>
            <Navbar.Brand href="https://www.instagram.com/vtsf2022/" target="_blank">
              <img
                alt=''
                src={process.env.PUBLIC_URL + './image/instagramLogo.jpg'}
                width='30'
                height='30'
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Brand href="https://www.facebook.com/Vancouver-Taiwanese-Student-Forum-VTSF-108853708309621" target="_blank">
              <img
                alt=''
                src={process.env.PUBLIC_URL + './image/facebookLogo.jpg'}
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
