import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const VTSFnavbar = () => {
  return (
    <div>
        <Navbar className='NAVC' expand="lg">
            <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='TitleText'>Home</Nav.Link>
                            <Nav.Link href="/Gallery" className='TitleText'>Gallery</Nav.Link>
                            <Nav.Link href="/EventDetails" className='TitleText'>Event Details</Nav.Link>
                            <Nav.Link href="/Blog" className='TitleText'>Blog</Nav.Link>
                            <Nav.Link href="/Commitee" className='TitleText'>Commitee</Nav.Link>
                            <Nav.Link href="/Sponsors" className='TitleText'>Sponsors</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default VTSFnavbar